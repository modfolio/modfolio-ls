# Universe 하네스 개선 제안 — Child Project 피드백 종합

> 출처: modfolio-ls 하네스 점검 세션 (2026-03-24)
> 동일/유사 피드백이 modfolio-studio, works, axiom, ls에서 공통 발생 중

---

## 1. Self-Learning 루프 미작동 (모든 프로젝트 공통)

### 문제

Universe `settings.json`의 Stop hook quality gate agent가 `memory/pattern-history.md`를 **읽기만** 하고 **쓰기를 하지 않는다**.

```
STEP 3: Check memory/pattern-history.md for repeated violations.
```

CLAUDE.md에는 Self-Learning 섹션이 있고, 에스컬레이션 규칙(2회 경고 → 3회 Rule 강화)이 정의되어 있지만, 실제로 위반을 기록하는 메커니즘이 없어서 루프 자체가 작동하지 않는다.

### 영향 범위

`settings.json`은 universe에서 모든 child project로 sync되므로, **생태계 전체 프로젝트**가 동일하게 self-learning이 무력화된 상태.

### 제안 수정

STEP 3를 아래로 변경:

```
STEP 3: Check AND UPDATE memory/pattern-history.md:
- If violations found: read the table. If the violation pattern already exists, increment count and update date. If new, append a row: | violation description | 1 | today's date | TRACKING |.
- If any pattern reaches count 3, change its status to ESCALATE.
- If no violations found: read only, do not modify.
```

modfolio-studio, modfolio-ls에서 이미 로컬 적용 완료. 검증됨.

---

## 2. `memory/` 디렉토리 미존재 (모든 프로젝트 공통)

### 문제

Stop hook이 참조하는 `memory/pattern-history.md`, `memory/decisions-log.md`가 존재하지 않는다. Universe에도 `memory/` 디렉토리가 없고, `.gitignore`에도 `memory/`가 없다.

### 제안

1. Universe에 `memory/` 부트스트랩 구조를 정의:
```
memory/
├── pattern-history.md    # 위반 패턴 추적 (Stop hook이 자동 기록)
├── decisions-log.md      # 아키텍처/디자인 결정 (Stop hook이 자동 기록)
├── skill-effectiveness.md # Skill 효과 추적 (Autoresearch용)
└── evals/                # 최적화 eval 케이스
```

2. `.gitignore` 템플릿에 `memory/` 추가 (세션 아티팩트, git 추적 불필요)

3. `sync-knowledge` 스크립트에 memory/ 부트스트랩을 포함하거나, `/harness-check`가 자동 생성하도록 수정

---

## 3. `quality:all` 스크립트가 모노레포 전체를 커버하지 않음

### 문제

modfolio-ls에서 발견: `quality:all`이 `check && typecheck`만 실행하고, app workspace의 `typecheck:app`을 포함하지 않았다. 결과적으로 apps/app의 타입 에러(`Locals` index signature 누락)가 commit 전 검증을 통과하고 있었다.

### 제안

Universe의 새 앱 스캐폴딩(`/new-app` skill) 또는 `sync-knowledge` 시, 모노레포 프로젝트의 `quality:all`이 **모든 workspace의 typecheck를 포함**하도록 가이드 추가.

예시 패턴:
```json
"quality:all": "bun run check && bun run typecheck && bun run typecheck:app"
```

---

## 4. `.mcp.json` 포맷팅 불일치

### 문제

Universe에서 sync된 `.mcp.json`이 spaces 들여쓰기를 사용하나, Biome v2는 tabs를 기대한다. 결과적으로 sync 직후 `bun run check`가 실패한다.

### 제안

Universe의 `.mcp.json`을 Biome 설정에 맞는 tabs 들여쓰기로 통일. 또는 `sync-knowledge` 스크립트가 sync 후 `biome check --write .mcp.json`을 자동 실행.

---

## 5. CLAUDE.md 참조 섹션 정합성

### 문제

Child project CLAUDE.md의 `참조` 섹션에 `sequential-thinking`이 남아 있었다 (이미 제거된 MCP). CLI 등록 MCP와 프로젝트 MCP의 구분도 없었다.

### 제안

`sync-knowledge` 또는 CLAUDE.md 템플릿에서 참조 섹션의 MCP 라인을 아래 형식으로 통일:

```
- MCP: context7, github, cloudflare, playwright, neon, svelte, figma (CLI 등록), canva (CLI 등록), paper (로컬 Desktop), filesystem
- Plugins: typescript-lsp, frontend-design, code-review, ...
```

`sequential-thinking` 잔존 참조를 전 프로젝트에서 일괄 제거 필요.

---

## 6. Astro 프로젝트용 PostToolUse typecheck hook 패턴

### 발견

Astro 파일은 HTML/TS 혼합이라 Biome lint만으로는 타입 에러를 잡지 못한다. `.astro` 파일 수정 시 자동 typecheck를 추가하면 즉시 피드백이 가능하다.

### 제안

Astro 프레임워크 프로젝트용 hooks 패턴을 `/deploy` 또는 `/new-app` skill에 문서화:

```json
{
  "type": "command",
  "command": "if echo \"$TOOL_INPUT\" | grep -qE '\\.astro'; then bun run typecheck 2>&1 | tail -5; fi"
}
```

SvelteKit 프로젝트도 유사하게 `.svelte` → `svelte-check` 패턴 추가 가능.

---

## 7. `/harness-check` 개선 제안

### 현재 한계

`/harness-check`는 파일 존재 여부와 byte-for-byte 일치만 검증한다. 실제로는:
- `memory/` 디렉토리 존재 여부
- Stop hook prompt의 "Check AND UPDATE" 패턴 포함 여부
- `quality:all` 스크립트의 전체 workspace 커버리지
- `.mcp.json` Biome 포맷 정합성

등의 **기능적 정합성**도 검증해야 한다.

### 제안

`/harness-check` skill에 "기능적 검증" 항목 추가:
- `memory/` 디렉토리 + 필수 파일 존재
- Stop hook prompt에 `AND UPDATE` 키워드 포함
- `.mcp.json`에 `sequential-thinking` 미포함
- `quality:all`이 프로젝트의 모든 `typecheck:*` 스크립트를 호출

---

## 요약: Universe 측 액션 아이템

| # | 항목 | 영향 범위 | 긴급도 |
|---|------|----------|--------|
| 1 | Stop hook `Check AND UPDATE` 패턴 | 전체 생태계 | P0 — self-learning 무력화 |
| 2 | `memory/` 부트스트랩 + .gitignore | 전체 생태계 | P0 — #1의 전제조건 |
| 3 | quality:all 모노레포 커버리지 가이드 | 모노레포 앱 | P1 |
| 4 | .mcp.json Biome 포맷 통일 | 전체 생태계 | P1 — sync 후 lint 실패 |
| 5 | 참조 섹션 MCP 정합성 | 전체 생태계 | P1 |
| 6 | 프레임워크별 PostToolUse 패턴 | Astro/Svelte 앱 | P2 |
| 7 | /harness-check 기능적 검증 확장 | 전체 생태계 | P2 |

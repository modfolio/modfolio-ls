---
paths:
  - "**/*.astro"
  - "**/astro.config.*"
---

# Astro Files Rules

## 어댑터
- `@astrojs/cloudflare` adapter 사용 필수

## 성능
- Island 디렉티브 적절히 사용 (`client:load`, `client:idle`, `client:visible`)
- Zero JS 타겟 — 가능한 한 서버 렌더링 우선
- 불필요한 `client:load` 지양 → `client:idle` 또는 `client:visible` 선호

## 미들웨어
- `src/middleware.ts` — Astro middleware 체이닝은 `sequence()` 사용
- 인증 미들웨어는 `Astro.locals`에 user 주입
- 미들웨어에서 heavy computation 금지 — edge latency 증가

## 스코프 스타일
- `.astro` 파일 내 `<style>` 태그는 기본 scoped — 전역 필요 시 `<style is:global>` 명시
- `define:vars` 디렉티브로 JS → CSS 변수 전달
- 디자인 토큰은 `var(--token)` 참조 — `.astro` 내 하드코딩 금지

## 컴포넌트 합성
- Props는 `Astro.props` 디스트럭처링
- 슬롯: `<slot />` (기본), `<slot name="..." />` (named)
- Fragment: `<Fragment>` 또는 빈 `<>...</>`
- 조건부 렌더링: `{condition && <Component />}` 패턴

## 금지 패턴
- `client:load` 남용 — SSR에서 처리 가능한 로직을 클라이언트에서 실행
- Starlight: `slug: ''` 사용 금지 (→ `link: '/'`)
- Biome `.astro` 파싱 불가 → `biome.json`에 overrides 필요
- `Astro.redirect()` 남용 — 가능한 한 SSR 렌더링 우선

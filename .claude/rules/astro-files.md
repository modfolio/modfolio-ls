---
paths:
  - "**/*.astro"
  - "**/astro.config.*"
---

# Astro Files Rules

## 어댑터
- `@astrojs/cloudflare` adapter 사용 필수
- `output: 'server'` 또는 `output: 'hybrid'` — SSR 페이지가 있으면 명시
- `wrangler.jsonc`에 `pages_build_output_dir` + `nodejs_compat` 설정

## Island 아키텍처 (핵심)
- Zero JS 기본 — 서버 렌더링 우선, 클라이언트 하이드레이션 최소화
- `client:visible` — 뷰포트 진입 시 하이드레이션 (가장 선호)
- `client:idle` — idle 시 하이드레이션 (사용자 상호작용 필요한 경우)
- `client:load` — 즉시 하이드레이션 (최후 수단, 페이지당 2개 이하 권장)
- `client:media="(max-width: 768px)"` — 조건부 하이드레이션 (반응형에 유용)
- 정적 콘텐츠(텍스트 나열, 이미지 갤러리)에 `client:*` 지시어 절대 사용 금지

## 이미지
- `<img>` → `alt` 속성 필수 (장식 이미지에만 빈 `alt=""`)
- Hero 이외 이미지: `loading="lazy"` + `decoding="async"` 필수
- `width` + `height` 명시하여 CLS 방지
- 가능하면 Astro 내장 `<Image>` 컴포넌트 사용 (자동 최적화)

## 스크립트
- `<script>` 태그는 Astro가 자동 번들링/최적화 — 대부분 `is:inline` 불필요
- 외부 라이브러리 인라인 삽입 시에만 `is:inline` 사용
- `define:vars={{ }}` 로 서버 데이터를 클라이언트 스크립트에 전달
- Astro 컴포넌트 frontmatter (---) 에서 `document`/`window` 접근 금지 → `<script>` 블록에서만

## 스타일
- `<style>` 블록은 자동 컴포넌트 스코프
- 글로벌 스타일 → `<style is:global>` 또는 별도 `.css` import
- 하드코딩 색상/spacing 금지 → CSS 변수 필수 (디자인 토큰 원칙)
- 인라인 `style=""` 속성 3개 초과 시 `<style>` 블록으로 추출
- `<style>` 내 `@import` 금지 → 별도 CSS 파일로 분리

## 접근성 (WCAG AA)
- `<html lang="ko">` 필수 (다국어 시 적절한 lang 코드)
- `<img>` → `alt` 필수
- 아이콘 전용 버튼/링크 → `aria-label` 필수
- 색상 대비 4.5:1 이상 (본문), 3:1 이상 (대형 텍스트)
- `tabindex` 남용 금지 — 자연스러운 DOM 순서 우선

## SEO
- 모든 페이지: `<title>` + `<meta name="description">` 필수
- OG 태그 권장 (`og:title`, `og:description`, `og:image`)
- 캐노니컬 URL 설정 (`<link rel="canonical">`)

## 금지 패턴
- `client:load` 남용 — SSR에서 처리 가능한 로직을 클라이언트에서 실행
- Starlight: `slug: ''` 사용 금지 (→ `link: '/'`)
- Biome `.astro` 파싱 불가 → `biome.json`에 overrides 필요
- frontmatter에서 `document`/`window` 직접 접근
- `<style>` 내 `@import` 문
- 인라인 `style` 속성 남용 (3개 초과)

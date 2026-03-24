---
paths:
  - "**/*.css"
---

# CSS Files Rules

## 토큰 사용 (필수)
- 색상/spacing/radius/shadow → CSS 변수 필수
- 하드코딩된 색상값 금지 (`#fff`, `rgb()`, `hsl()`, `oklch()` 등)
- 디자인 토큰 팔레트에서 가장 가까운 변수 사용
- `font-family`는 반드시 `var(--font-*)` 사용

## 레이아웃
- `@layer reset, base, tokens, components, utilities` 순서 준수
- 새 CSS 파일 → `@layer` 선언 필수
- `!important` 금지 (예외 없음)
- 반응형: `clamp()` 선호, 브레이크포인트 (sm:640, md:768, lg:1024, xl:1280)

## 애니메이션 성능
- `prefers-reduced-motion` fallback 필수 (모든 animation/transition)
- `transform`/`opacity`만 애니메이트 (GPU 가속)
- `width`/`height`/`top`/`left`/`right`/`bottom` 애니메이트 금지 → `transform: translate()` 사용
- `will-change` 남용 금지 — 실제 성능 문제 시에만 사용

## 접근성
- `prefers-color-scheme` 고려 (다크모드 지원 시)
- 포커스 스타일 제거 금지 — `outline: none` 시 대체 포커스 표시 필수
- 색상만으로 정보 전달 금지 (형태/텍스트 병행)

## 금지 패턴
- `!important` (예외 없음)
- `text-align: justify` (가독성 저하)
- 하드코딩된 `font-family` 값
- 하드코딩된 색상/spacing 값
- `width`/`height`/`top`/`left` 애니메이션
- `@import` in CSS (Astro 번들러에서 import로 처리)

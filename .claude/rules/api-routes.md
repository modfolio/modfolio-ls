---
paths:
  - "**/+server.ts"
  - "**/api/**/*.ts"
  - "**/routes/**/*.ts"
  - "**/+page.server.ts"
  - "**/middleware.ts"
  - "**/pages/auth/**/*.ts"
---

# API Routes Rules

## 입력 검증
- Zod 입력 검증 필수 — 모든 request body, query params, path params
- `z.safeParse()` 사용 + 실패 시 400 응답
- Path params도 Zod로 검증 (숫자 ID 등)

## 에러 처리
- try/catch 필수 + HTTP 상태코드 적절히 반환
- 내부 에러 노출 금지 — 사용자에게는 generic message, 서버 로그에는 상세 에러
- 비동기 함수 내 uncaught rejection 방지

## 인증 (Connect SSO v5)
- Protected route → Connect SSO JWT 검증 필수
- `tokens.access_token` 사용 (v4의 `tokens.token` 금지)
- Webhook → HMAC-SHA256 서명 검증 필수

## Astro Middleware
- `defineMiddleware()` 사용
- 인증 미들웨어 → `Astro.locals`에 사용자 정보 저장
- 미들웨어에서 `next()` 호출 누락 방지
- 에러 발생 시 적절한 redirect/response 반환

## 금지 패턴
- `as any` 타입 캐스팅
- 하드코딩된 시크릿/API 키
- uncaught promise rejection
- `@ts-ignore`, `@ts-expect-error` (정공법 원칙)
- `console.log` 프로덕션 코드 잔존

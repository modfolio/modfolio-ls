# Modfolio LS — 현재 사이트 텍스트 + 메뉴 구성

> 2026-03-25 기준. 다른 AI에게 리뷰 요청 시 이 문서를 공유하세요.

---

## 브랜드 정보

- **이름**: Modfolio LS
- **포지셔닝**: 라이프스타일 그룹 (Modfolio 생태계의 자회사)
- **모회사**: Modfolio ("Visualize the Untold")
- **현재 태그라인**: "삶을 누리는 방법."
- **도메인**: ls.modfolio.io
- **하위 앱**: KeepNBuild (여행 설계), Worthee (자기관리/명예)
- **미래 확장**: 취미, 노후, 환경, 기부, 동물복지 등

---

## 네비게이션

| 위치 | 항목 | 링크 | 비고 |
|------|------|------|------|
| 좌측 | **Modfolio LS** (serif + gradient badge) | `/` | 브랜드 로고 |
| 중앙 | Apps | `/apps` | |
| 중앙 | Contact | `/contact` | |
| 우측 | **Discover** (pill button) | `/auth/login` | 비로그인 시 |
| 우측 | **Life** (pill button) | `life.modfolio.io` | 로그인 시 |

---

## 홈 (`/`)

로그인 상태면 `life.modfolio.io`로 리다이렉트.

### 섹션 1: Hero (전체 화면)

```
[eyebrow]  MODFOLIO LS

[whisper]  당신이 누릴 수 있는 일상은
[shout]    아직 더 있습니다.

[sub]      여행을 그리고, 성장을 기록하고,
           아직 이름 붙이지 못한 경험까지.

[tagline]  삶을 누리는 방법.
```

배경: 마우스 반응형 자개빛(plum/sky) gradient glow

### 섹션 2: Manifesto (gradient wash 배경)

```
우리가 믿는 것
  모든 사람은 자신의 일상을 더 깊이 누릴 자격이 있습니다.
  평범한 하루란 없습니다 — 다만 아직 들여다보지 않았을 뿐.

우리가 만드는 것
  여행을 직접 그리고, 매일의 성장을 기록하고, 꾸준함을 함께 확인하는 경험.
  그리고 아직 이름 붙이지 못한 영역까지.
  삶을 누리는 방법을 하나씩 만들어갑니다.
```

### 섹션 3: Portfolio (raised 배경, 에디토리얼 블록)

```
[eyebrow]  PORTFOLIO
[heading]  우리가 만드는 것.

────────────────────────────
KeepNBuild              keepnbuild.com
Custom Travel Design

당신만의 여정을 직접 그리세요.
어디로 떠날지, 무엇을 경험할지. 패키지 안에 없는 여행을
직접 설계하고 기록합니다. 경험이 쌓일수록 여행이 깊어집니다.
────────────────────────────
Worthee                 worthee.io
Honor & Self-Management

꾸준함이 빛나는 순간.
매일의 실천을 기록하고, 과정을 인증하고, 커뮤니티가 함께
확인합니다. 혼자만의 다짐이 아닌, 함께 빛나는 꾸준함.
────────────────────────────
```

### 섹션 4: Closing CTA (gradient wash 배경)

```
오늘부터, 조금 더.
[Discover] → /auth/login
```

### 섹션 5: Footer

```
Modfolio LS (gradient)
삶을 누리는 방법.

Products        Platform       Ecosystem       Legal
KeepNBuild      Connect        Works            개인정보처리방침
Worthee         Pay            LS               이용약관
                Docs           Axiom
                               Studio

───────────────────────────────────────────────
모드폴리오 · 대표 김동헌 · 사업자등록번호 104-95-65636
통신판매업 제2025-수원팔달-0953호 · 출판사 제2024-000037호
경기도 수원시 팔달구 효원로 278, 6층 602호 · contact@modfolio.io

© 2026 Modfolio. All rights reserved.
```

---

## 서브페이지

### `/apps` — 앱 목록
- Hero: "각자의 방식으로, 일상을 펼칩니다."
- 2-column 앱 카드 (KeepNBuild, Worthee)
- 하단 CTA: "오늘부터, 조금 더." + Discover

### `/apps/keepnbuild` — KeepNBuild 상세
- Breadcrumb: LS → Apps → KeepNBuild
- Hero: "당신만의 여정을 직접 그리세요."
- 핵심 기능 3개: 나만의 일정 / 여행을 기록 / 다음 여행의 윤곽
- CTA: keepnbuild.com 방문

### `/apps/worthee` — Worthee 상세
- Breadcrumb: LS → Apps → Worthee
- Hero: "꾸준함이 빛나는 순간."
- 핵심 기능 3개: 매일을 기록 / 과정을 인증 / 함께 확인
- CTA: worthee.io 방문

### `/contact` — 연락처
- Hero: "궁금한 점이 있으신가요?"
- 연락처 (Email, 소재지) + 사업자 정보 2-column

### `/privacy`, `/terms` — 법적 페이지
- 기존 내용 유지

---

## 디자인 시스템 요약

| 항목 | 값 |
|------|---|
| Display Font | goldenbook (Adobe Typekit) |
| Body Font | neue-haas-unica |
| Story Font | acumin-pro |
| UI Font | brandon-grotesque |
| Fallback | Pretendard Variable |
| Primary Color | plum oklch(0.72 0.14 320) |
| Secondary Color | sky oklch(0.78 0.1 225) |
| Surface | warm white #f9f8f6 |
| Gradient | 135deg plum → sky |
| Grid | 8pt spacing |
| Locale | ko_KR |

---

## 언어 규칙

### 금지 언어
| 표현 | 이유 |
|------|------|
| 증강, augmented | 기계적, 차가움 |
| 선명, vivid | 형용사 과잉 |
| 도구, 포탈, 허브 | 유틸리티 회사 언어 |
| 흩어진, 조각, 중심 | 생산성 앱 언어 |
| 무료로 시작하기 | SaaS 가격 마찰 제거 언어 |
| Start Living | 비사용자 배제 느낌 |

### 핵심 키워드
- **누리다** — 자격으로서 충분히 경험하고 향유하다
- **깊이** — 일상의 깊이를 넓히다
- **경험** — 아직 이름 붙이지 못한 경험

### 하이브리드 규칙
- 영어 유지: 브랜드명, 앱 이름, CTA 버튼, Nav 항목, 도메인
- 한국어: Hero 카피, Manifesto, 섹션 heading, 앱 설명, SEO

---

## 리뷰 요청 시 질문 포인트

1. "누리다" 키워드가 LS의 정체성을 충분히 표현하는가?
2. Hero 카피 "당신이 누릴 수 있는 일상은 아직 더 있습니다"가 3초 안에 이해되는가?
3. CTA "Discover"가 그룹사 랜딩에 적합한가? 대안은?
4. "삶을 누리는 방법."이 태그라인으로서 기억에 남는가?
5. Manifesto 텍스트가 미션/비전을 충분히 전달하는가?
6. 전체적인 톤이 "라이프스타일 그룹"다운가, 아니면 여전히 SaaS적인가?

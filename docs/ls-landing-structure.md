# Modfolio LS Landing — 구조 및 텍스트 정리

> 2026-03-24 기준. `apps/landing/` 소스 기반.

---

## 사이트 구조

```
apps/landing/
├── src/
│   ├── layouts/
│   │   └── Base.astro              ← 공통 레이아웃 (head, fonts, scripts)
│   ├── pages/
│   │   ├── index.astro             ← 홈 (/)
│   │   ├── about.astro             ← 소개 (/about)
│   │   ├── features.astro          ← 기능 (/features)
│   │   ├── blog.astro              ← 블로그 (/blog) — Coming Soon
│   │   ├── privacy.astro           ← 개인정보처리방침 (/privacy)
│   │   └── terms.astro             ← 이용약관 (/terms)
│   ├── components/
│   │   ├── shared/
│   │   │   └── Nav.astro           ← 고정 네비게이션
│   │   └── landing/
│   │       ├── Hero.astro          ← 히어로 섹션
│   │       ├── AppShowcase.astro   ← 앱 카드 그리드
│   │       ├── ValueProp.astro     ← 가치 제안 3-column
│   │       ├── CallToAction.astro  ← CTA 섹션
│   │       └── Footer.astro        ← 4-column 푸터 + 법적 고지
│   └── styles/
│       ├── tokens.css              ← 디자인 토큰 (OKLch)
│       ├── typography.css          ← 폰트 스케일
│       ├── reset.css               ← CSS 리셋
│       ├── animations.css          ← 스크롤 리빌
│       └── utilities.css           ← 유틸리티 클래스
└── astro.config.ts                 ← CF Pages + SSR
```

---

## 네비게이션 (Nav.astro)

| 위치 | 항목 | 링크 |
|------|------|------|
| 좌측 | **Modfolio LS** (브랜드) | `/` |
| 중앙 | About | `/about` |
| 중앙 | Features | `/features` |
| 중앙 | Blog | `/blog` |
| 우측 | **시작하기** (비로그인) | `/auth/login` |
| 우측 | **Life** (로그인) | `https://life.modfolio.io` |

---

## 홈 (`/`) — index.astro

로그인 상태면 `https://life.modfolio.io`로 리다이렉트.

### 섹션 1: Hero

> **삶의 조각들이**
> **흩어져 있다면**
>
> 여행 계획은 여기, 습관 기록은 저기.
> 당신의 일상에 하나의 중심이 필요합니다.
>
> [시작하기] → `/auth/login`

### 섹션 2: App Showcase

> **두 가지 라이프스타일 도구**

| 앱 | Lead | Description | Link |
|----|------|-------------|------|
| **KeepNBuild** | 당신만의 여행을 직접 설계하세요. | 일정을 만들고, 경험을 기록하고, 다음 여행을 미리 그려보세요. | keepnbuild.com |
| **Worthee** | 성실함이 증명되는 순간을 경험하세요. | 매일 습관을 기록하고 인증하면, 커뮤니티가 검증합니다. | worthee.io |

### 섹션 3: Value Proposition

> **왜 Modfolio LS인가**

| # | Title | Description |
|---|-------|-------------|
| 01 | 하나의 계정, 모든 라이프스타일 | Modfolio Connect 하나로 여행 설계와 자기관리를 모두. |
| 02 | 흩어진 일상이 하나로 | 각 앱은 독립적이지만, 당신의 데이터는 하나의 그림이 됩니다. |
| 03 | 당신의 데이터, 당신의 것 | 모든 데이터는 암호화되며, 언제든 내보낼 수 있습니다. |

### 섹션 4: Call to Action

> **오늘, 일상의 중심을 잡으세요.**
>
> Modfolio Connect 계정 하나면 충분합니다.
>
> [무료로 시작하기] → `/auth/login`

### 섹션 5: Footer

**4-column 그리드:**

| Brand | Products | Platform | Company |
|-------|----------|----------|---------|
| Modfolio LS | KeepNBuild | Connect | About |
| 라이프스타일 그룹 | Worthee | Pay | Features |
| [Instagram] [LinkedIn] [YouTube] | | Docs | Blog |
| | | | 개인정보처리방침 |
| | | | 이용약관 |

**법적 고지:**
> 모드폴리오 · 대표 김동헌 · 사업자등록번호 104-95-65636 · 통신판매업 제2025-수원팔달-0953호 · 출판사 제2024-000037호 · 경기도 수원시 팔달구 효원로 278, 6층 602호 · contact@modfolio.io
>
> © 2026 Modfolio. All rights reserved.

---

## About (`/about`) — about.astro

**title**: About - Modfolio LS
**description**: Modfolio LS 그룹의 이야기.

### 섹션 1: Hero

> **Modfolio LS의 이야기**
>
> 여행 설계부터 자기관리까지,
> 흩어진 일상을 하나로 연결합니다.

### 섹션 2: Mission

> **미션**
>
> 라이프스타일이 도구의 나열이 아니라
> 하나의 경험이어야 한다고 믿습니다.
>
> 여행을 설계하고, 습관을 기록하고, 성실함을 증명하는 모든 순간이
> 자연스럽게 이어지는 일상을 만들어갑니다.

### 섹션 3: 두 가지 도구, 하나의 철학

| 앱 | Tagline | Description | Link |
|----|---------|-------------|------|
| **KeepNBuild** | Custom Travel Design | 어디로 떠날지, 무엇을 경험할지. 당신만의 여행을 직접 설계하고 기록하세요. | keepnbuild.com |
| **Worthee** | Honor & Self-Management | 습관을 기록하고 인증하면 커뮤니티가 검증합니다. 성실함이 명예가 되는 곳. | worthee.io |

### 섹션 4: Modfolio 생태계

> Modfolio LS는 Modfolio 생태계의 라이프스타일 그룹입니다.
> 하나의 계정으로 모든 서비스를 이용하세요.
>
> [Modfolio] [Connect] [Pay] [Docs]

### 섹션 5: CTA

> **일상의 중심을 잡을 준비가 되셨나요?**
>
> Modfolio Connect 계정 하나면 충분합니다.
>
> [무료로 시작하기] → `/auth/login`

---

## Features (`/features`) — features.astro

**title**: Features - Modfolio LS
**description**: Modfolio LS의 핵심 기능.

### 섹션 1: Hero

> **왜 Modfolio LS인가**
>
> 세 가지 핵심 가치가 당신의 라이프스타일을 바꿉니다.

### 섹션 2: Feature Cards (3-column)

| # | Title | Body |
|---|-------|------|
| 01 | 하나의 계정, 모든 라이프스타일 | Modfolio Connect로 KeepNBuild와 Worthee 모두 이용. 하나의 인증으로 모든 도구에 접근하세요. |
| 02 | 흩어진 일상이 하나의 그림으로 | 독립적인 앱이지만 하나의 프로필. 여행 기록과 습관 데이터가 함께 일상의 그림을 완성합니다. |
| 03 | 당신의 데이터, 당신의 것 | 암호화 보관, 언제든 내보내기 가능. 삭제 요청 시 30일 이내 완전 제거됩니다. |

### 섹션 3: Before / After 비교

> **Modfolio LS로 달라지는 것**

| Before | After |
|--------|-------|
| 여행 앱 따로, 습관 앱 따로 | 하나의 포탈에서 모든 라이프스타일 |
| 각각 다른 계정으로 로그인 | SSO 한 번 로그인으로 전부 접근 |
| 데이터가 흩어져 관리 불가 | 내 데이터, 내가 소유하고 내보내기 |

### 섹션 4: CTA

> **지금 시작해보세요**
>
> Modfolio Connect 계정 하나면 충분합니다.
>
> [무료로 시작하기] → `/auth/login`

---

## Blog (`/blog`) — blog.astro

**title**: Blog - Modfolio LS
**description**: Modfolio LS 그룹의 소식과 이야기.

### 섹션 1: Hero

> **블로그**
>
> 라이프스타일 그룹의 소식과 이야기

### 섹션 2: Coming Soon

> **준비하고 있습니다**
>
> 여행, 웰니스, 그리고 일상에 대한 이야기를 곧 들려드리겠습니다.
> Modfolio Press 뉴스레터와 함께 라이프스타일 인사이트를 전해드릴 예정입니다.

**미리보기 카드** (스켈레톤 3개):
- 여행 / 웰니스 / 소식

### 섹션 3: CTA

> **소식을 놓치지 마세요**
>
> 계정을 만들면 새 글이 올라올 때 알림을 받을 수 있습니다.
>
> [계정 만들기] → `/auth/login`

---

## 개인정보처리방침 (`/privacy`) — privacy.astro

**title**: 개인정보처리방침 - Modfolio LS
**시행일**: 2026년 3월 22일

### 1. 수집하는 개인정보
- 이메일 주소 (Modfolio Connect SSO를 통한 인증)
- 이름 (프로필 표시용)
- 서비스 이용 기록

### 2. 개인정보의 이용 목적
수집된 정보는 서비스 제공, 사용자 인증, 서비스 개선 목적으로만 이용됩니다.

### 3. 개인정보의 보유 및 이용 기간
회원 탈퇴 시 지체 없이 파기합니다. 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.

### 4. 문의
contact@modfolio.io

---

## 이용약관 (`/terms`) — terms.astro

**title**: 이용약관 - Modfolio LS
**시행일**: 2026년 3월 22일

### 1. 목적
이 약관은 모드폴리오(이하 "회사")가 제공하는 Modfolio LS 서비스의 이용 조건을 규정합니다.

### 2. 서비스 내용
Modfolio LS는 KeepNBuild(여행 설계)와 Worthee(자기관리)를 연결하는 라이프스타일 포탈 서비스입니다.

### 3. 이용자 의무
이용자는 관계 법령, 이 약관의 규정, 이용 안내 및 서비스와 관련하여 공지한 주의사항을 준수하여야 합니다.

### 4. 책임 제한
회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.

### 5. 문의
contact@modfolio.io

---

## 공통 메타데이터

| 항목 | 값 |
|------|---|
| 기본 title | Modfolio LS |
| 기본 description | 여행 설계부터 자기관리까지. KeepNBuild와 Worthee가 당신의 라이프스타일을 연결합니다. |
| canonical | `https://ls.modfolio.io{pathname}` |
| og:type | website |
| og:locale | ko_KR |
| og:site_name | Modfolio LS |
| theme-color | #f9f8f6 |
| lang | ko |
| Schema.org | Organization (parent: Modfolio) |

## 디자인 시스템

| 항목 | 값 |
|------|---|
| Display Font | Adobe Typekit (kit: fmh4fod) |
| Body Font | Pretendard Variable |
| Mono Font | JetBrains Mono |
| 색상 체계 | OKLch 3-tier tokens |
| 그리드 | 8pt spacing scale |
| 애니메이션 | Scroll reveal (IntersectionObserver, threshold 0.12) + Hero mouse tracking |
| 접근성 | prefers-reduced-motion 지원, skip link |

## 반복되는 CTA 패턴

모든 주요 페이지에 동일한 CTA 구조:
- 제목: 행동 유도 문구
- 부제: "Modfolio Connect 계정 하나면 충분합니다."
- 버튼: gradient pill → `/auth/login`

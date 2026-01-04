# 📁 프로젝트 구조

김장오 행정사 사무소 웹사이트의 전체 구조를 설명합니다.

## 디렉토리 구조

```
kimjangoh-admin-services/
│
├── .github/                      # GitHub 관련 설정
│   └── workflows/
│       └── deploy.yml           # GitHub Pages 자동 배포 워크플로우
│
├── .vscode/                      # VS Code 설정
│   ├── extensions.json          # 권장 확장 프로그램
│   └── settings.json            # 작업 공간 설정
│
├── public/                       # 정적 파일 (빌드 시 그대로 복사됨)
│   └── favicon.svg              # 파비콘
│
├── src/                          # 소스 코드
│   ├── app/                     # 애플리케이션 코드
│   │   ├── components/          # React 컴포넌트
│   │   │   ├── Header.tsx       # 헤더/네비게이션
│   │   │   ├── HeroSection.tsx  # 히어로 섹션
│   │   │   ├── TrustIndicators.tsx  # 신뢰 지표
│   │   │   ├── ServicesSection.tsx  # 서비스 섹션
│   │   │   ├── ProfileSection.tsx   # 프로필 섹션
│   │   │   ├── ProcessSection.tsx   # 프로세스 섹션
│   │   │   ├── ConsultationForm.tsx # 상담 신청 폼
│   │   │   ├── Footer.tsx       # 푸터
│   │   │   ├── FloatingButton.tsx   # 플로팅 버튼
│   │   │   ├── figma/           # Figma 관련 컴포넌트
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   └── ui/              # 재사용 가능한 UI 컴포넌트
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── label.tsx
│   │   │       ├── checkbox.tsx
│   │   │       ├── select.tsx
│   │   │       ├── textarea.tsx
│   │   │       └── ... (기타 UI 컴포넌트)
│   │   └── App.tsx              # 메인 앱 컴포넌트
│   │
│   ├── styles/                  # 스타일시트
│   │   ├── fonts.css           # 폰트 설정 (Pretendard)
│   │   ├── index.css           # 전역 스타일 및 커스텀 애니메이션
│   │   ├── tailwind.css        # Tailwind CSS 임포트
│   │   └── theme.css           # 테마 변수 (색상, 타이포그래피 등)
│   │
│   ├── main.tsx                # 애플리케이션 진입점
│   └── vite-env.d.ts           # Vite 환경 타입 정의
│
├── .eslintrc.cjs               # ESLint 설정
├── .gitignore                  # Git 무시 파일 목록
├── .prettierrc                 # Prettier 코드 포맷 설정
├── .prettierignore             # Prettier 무시 파일 목록
├── .env.example                # 환경 변수 예제
│
├── index.html                  # HTML 템플릿
├── package.json                # 프로젝트 의존성 및 스크립트
├── tsconfig.json               # TypeScript 설정
├── tsconfig.node.json          # Node 환경용 TypeScript 설정
├── vite.config.ts              # Vite 빌드 설정
├── postcss.config.mjs          # PostCSS 설정
│
├── CHANGELOG.md                # 변경 이력
├── DEPLOYMENT.md               # 배포 가이드
├── LICENSE                     # 라이선스
├── PROJECT_STRUCTURE.md        # 이 파일
├── QUICK_START.md              # 빠른 시작 가이드
└── README.md                   # 프로젝트 문서
```

## 파일 설명

### 🔧 설정 파일

#### `vite.config.ts`
- Vite 빌드 도구 설정
- React 플러그인 설정
- Tailwind CSS 플러그인 설정
- 경로 별칭 (`@` → `./src`)
- GitHub Pages 배포 설정
- 코드 스플리팅 설정

#### `tsconfig.json`
- TypeScript 컴파일러 옵션
- 엄격한 타입 체크 활성화
- 모듈 해석 설정
- 경로 매핑 (`@/*`)

#### `.eslintrc.cjs`
- ESLint 린팅 규칙
- TypeScript 규칙
- React Hooks 규칙
- React Refresh 규칙

#### `.prettierrc`
- 코드 포맷팅 규칙
- 세미콜론, 따옴표, 들여쓰기 등

### 📱 컴포넌트

#### `App.tsx`
- 메인 애플리케이션 컴포넌트
- 모든 섹션 컴포넌트 통합
- Toaster (알림) 설정

#### `Header.tsx`
- 상단 네비게이션 바
- 모바일 반응형 메뉴
- 로고 및 CTA 버튼

#### `HeroSection.tsx`
- 히어로 섹션
- 애니메이션 배경 (blob animation)
- 주요 메시지 및 CTA

#### `TrustIndicators.tsx`
- 신뢰 지표 섹션
- CountUp 애니메이션
- 35년 경력, 1000+ 상담, 98% 만족도

#### `ServicesSection.tsx`
- 서비스 소개 섹션
- 4가지 서비스 카테고리
- 인터랙티브 카드

#### `ProfileSection.tsx`
- 김장오 행정사 프로필
- 사진 및 경력 사항
- 반응형 레이아웃

#### `ProcessSection.tsx`
- 상담 프로세스 4단계
- 시각화된 플로우
- 애니메이션 화살표

#### `ConsultationForm.tsx`
- 상담 신청 폼
- React Hook Form 유효성 검사
- 개인정보 동의 체크박스

#### `Footer.tsx`
- 푸터
- 연락처 정보
- 빠른 링크

#### `FloatingButton.tsx`
- 플로팅 상담 버튼
- 스크롤 시 표시
- 펄스 애니메이션

### 🎨 스타일

#### `fonts.css`
- Pretendard 폰트 임포트
- CDN 기반 로딩

#### `theme.css`
- CSS 변수 정의
- 색상 팔레트
- 타이포그래피 설정
- 다크 모드 지원 (선택적)

#### `index.css`
- 전역 스타일
- 커스텀 애니메이션 (blob)
- Tailwind 임포트

### 📄 문서

#### `README.md`
- 프로젝트 개요
- 기술 스택
- 설치 및 실행 방법
- 주요 기능

#### `QUICK_START.md`
- 5분 빠른 시작 가이드
- 커스터마이징 가이드
- 문제 해결

#### `DEPLOYMENT.md`
- GitHub Pages 배포 가이드
- 커스텀 도메인 설정
- Vite 설정 설명
- 문제 해결

#### `CHANGELOG.md`
- 버전 변경 이력
- 새로운 기능
- 버그 수정
- 계획된 기능

#### `PROJECT_STRUCTURE.md`
- 이 파일
- 프로젝트 구조 설명
- 파일별 역할

## 🔄 데이터 흐름

```
User Input (Form)
    ↓
ConsultationForm Component
    ↓
React Hook Form Validation
    ↓
Toast Notification (Sonner)
    ↓
(Future: Backend API)
```

## 🎯 주요 의존성

### 프로덕션
- **react**: UI 라이브러리
- **react-dom**: React DOM 렌더러
- **motion**: 애니메이션
- **react-hook-form**: 폼 관리
- **lucide-react**: 아이콘
- **sonner**: 토스트 알림
- **@radix-ui/***: 접근성 높은 UI 프리미티브

### 개발
- **vite**: 빌드 도구
- **typescript**: 타입 체크
- **tailwindcss**: 유틸리티 CSS
- **eslint**: 코드 린팅
- **prettier**: 코드 포맷팅

## 🚀 빌드 프로세스

```
Source Code (src/)
    ↓
TypeScript Compilation
    ↓
Vite Bundling
    ↓
Code Splitting
    ↓
Minification & Optimization
    ↓
Output (dist/)
    ↓
GitHub Pages Deployment
```

## 📦 번들 구조

빌드 후 생성되는 청크:

- **react-vendor.js**: React 및 React DOM
- **ui-vendor.js**: Lucide React, Motion
- **form-vendor.js**: React Hook Form
- **main.js**: 애플리케이션 코드

## 🔐 환경 변수

현재 사용되지 않지만, 향후 추가 가능:

```env
VITE_API_URL=            # API 엔드포인트
VITE_CONTACT_PHONE=      # 연락처
VITE_CONTACT_EMAIL=      # 이메일
VITE_ENABLE_ANALYTICS=   # 분석 도구
```

## 🎨 디자인 토큰

`theme.css`에서 관리:

```css
--primary: #0F172A        /* 주 색상 */
--secondary: #14B8A6      /* 보조 색상 */
--accent: #F59E0B         /* 강조 색상 */
--radius: 0.75rem         /* 둥근 모서리 */
```

## 📱 반응형 브레이크포인트

Tailwind CSS 기본값:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔍 타입 안전성

- 모든 컴포넌트는 TypeScript로 작성
- 엄격한 타입 체크 활성화
- Props 인터페이스 정의
- 환경 변수 타입 정의

## 🎯 성능 최적화

1. **코드 스플리팅**: 벤더 청크 분리
2. **지연 로딩**: 동적 임포트 (필요시)
3. **이미지 최적화**: figma:asset 스킴
4. **CSS 최적화**: Tailwind purge
5. **번들 크기 분석**: Vite 빌드 리포트

---

**참고**: 이 구조는 확장 가능하며, 필요에 따라 추가 컴포넌트나 페이지를 쉽게 추가할 수 있습니다.

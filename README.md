# 김장오 행정사 사무소

> 35년 공직 경력의 전문 행정사 서비스

## 🌟 프로젝트 소개

김장오 행정사 사무소는 전 영광군 부군수이자 행정안전부 서기관 출신인 김장오 행정사가 운영하는 전문 행정 서비스 웹사이트입니다.

### 주요 서비스

- 🌐 국적/귀화/체류
- 📋 인허가 업무
- 🏗️ 토지/건물 행정
- 📄 민원 서류 작성

## 🚀 시작하기

### 사전 요구사항

- Node.js 20.x 이상
- npm 또는 pnpm

### 설치

```bash
# 의존성 설치
npm install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
# 개발 모드 실행 (http://localhost:3000)
npm run dev
# 또는
pnpm dev
```

### 프로덕션 빌드

```bash
# 빌드
npm run build
# 또는
pnpm build

# 빌드 결과물 미리보기
npm run preview
# 또는
pnpm preview
```

## 📦 프로젝트 구조

```
kimjangoh-admin-services/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 배포 워크플로우
├── src/
│   ├── app/
│   │   ├── components/         # React 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustIndicators.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProfileSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ConsultationForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── FloatingButton.tsx
│   │   │   └── ui/             # UI 컴포넌트 라이브러리
│   │   └── App.tsx             # 메인 앱 컴포넌트
│   ├── styles/
│   │   ├── fonts.css           # 폰트 설정 (Pretendard)
│   │   ├── index.css           # 전역 스타일
│   │   ├── tailwind.css        # Tailwind CSS
│   │   └── theme.css           # 테마 변수
│   └── main.tsx                # 앱 진입점
├── index.html                  # HTML 템플릿
├── vite.config.ts              # Vite 설정
├── tsconfig.json               # TypeScript 설정
├── package.json                # 프로젝트 의존성
└── README.md                   # 프로젝트 문서
```

## 🎨 기술 스택

### 프론트엔드

- **React 18.3** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite 6.3** - 빌드 도구
- **Tailwind CSS 4.1** - 스타일링
- **Motion (Framer Motion)** - 애니메이션

### UI 컴포넌트

- **Radix UI** - 접근성 높은 UI 프리미티브
- **Lucide React** - 아이콘
- **React Hook Form** - 폼 관리
- **Sonner** - 토스트 알림

### 타이포그래피

- **Pretendard** - 현대적인 한국어 웹폰트

## 🚢 배포

### GitHub Pages 자동 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

1. GitHub 저장소 생성
2. 코드를 main 브랜치에 푸시
3. GitHub 저장소 Settings → Pages → Source를 "GitHub Actions"로 설정
4. main 브랜치에 푸시할 때마다 자동으로 배포됩니다

### 수동 배포

```bash
# 빌드
npm run build

# dist 폴더의 내용을 웹 서버에 배포
```

## 📱 반응형 디자인

- 모바일 퍼스트 접근방식
- 데스크톱, 태블릿, 모바일 최적화
- 터치 친화적 인터페이스

## 🎯 주요 기능

### 1. 히어로 섹션
- 애니메이션 그라데이션 배경
- 명확한 CTA (Call-to-Action)
- 신뢰 지표 뱃지

### 2. 신뢰 지표
- CountUp 애니메이션
- 35년 경력, 1000+ 상담 실적, 98% 만족도

### 3. 프로필 섹션
- 김장오 행정사 실제 사진
- 상세 경력 사항
- 현대적인 카드 디자인

### 4. 서비스 섹션
- 4가지 주요 서비스 카테고리
- 인터랙티브 호버 효과
- 상담 신청 CTA

### 5. 프로세스 섹션
- 4단계 상담 프로세스 시각화
- 애니메이션 연결선
- 명확한 단계별 설명

### 6. 상담 신청 폼
- React Hook Form 기반
- 폼 유효성 검사
- 개인정보 동의 체크박스

### 7. 플로팅 버튼
- 스크롤 시 나타나는 상담 버튼
- 펄스 애니메이션 효과

## 🔧 환경 변수

현재 프로젝트는 환경 변수를 사용하지 않지만, 필요시 `.env` 파일을 생성하여 사용할 수 있습니다:

```env
# .env.example
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=info@kimjangoh.com
```

## 📄 라이선스

© 2025 김장오 행정사 사무소. All rights reserved.

## 📞 문의

- **전화**: 010-0000-0000
- **이메일**: info@kimjangoh.com
- **주소**: 전라남도 영광군

---

Made with ❤️ by 김장오 행정사 사무소

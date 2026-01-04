# ⚡ 빠른 시작 가이드

김장오 행정사 사무소 웹사이트를 5분 안에 실행하세요!

## 📦 1단계: 의존성 설치

```bash
# npm 사용 시
npm install

# pnpm 사용 시 (권장)
pnpm install

# yarn 사용 시
yarn install
```

## 🚀 2단계: 개발 서버 실행

```bash
# npm
npm run dev

# pnpm (권장)
pnpm dev

# yarn
yarn dev
```

브라우저가 자동으로 열리며 `http://localhost:3000`에서 확인할 수 있습니다.

## 🔨 3단계: 빌드

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

## 👀 4단계: 빌드 미리보기

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview
```

## 🌐 5단계: GitHub Pages 배포

### A. 자동 배포 (권장)

1. GitHub에 저장소 생성
2. 코드 푸시:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. GitHub 저장소 → Settings → Pages → Source를 "GitHub Actions"로 설정
4. 완료! 🎉

### B. 수동 배포

```bash
# 빌드
npm run build

# dist 폴더를 웹 호스팅에 업로드
```

## 📝 커스터마이징

### 연락처 정보 변경

다음 파일들에서 연락처 정보를 변경하세요:

1. **Header.tsx** - 헤더의 전화번호
2. **HeroSection.tsx** - 히어로 섹션의 연락처
3. **ConsultationForm.tsx** - 상담 폼의 연락처
4. **Footer.tsx** - 푸터의 연락처

### 색상 변경

`src/styles/theme.css` 파일에서 색상을 변경할 수 있습니다:

```css
:root {
  --primary: #0F172A;        /* 주 색상 */
  --secondary: #14B8A6;      /* 보조 색상 */
  --accent: #F59E0B;         /* 강조 색상 */
}
```

### 콘텐츠 수정

각 섹션의 컴포넌트 파일에서 콘텐츠를 직접 수정하세요:

- `src/app/components/HeroSection.tsx` - 메인 섹션
- `src/app/components/ProfileSection.tsx` - 프로필
- `src/app/components/ServicesSection.tsx` - 서비스
- `src/app/components/ProcessSection.tsx` - 프로세스

## 🐛 문제 해결

### Port 3000이 이미 사용 중

다른 포트 사용:
```bash
# vite.config.ts에서 포트 변경
server: {
  port: 3001,  // 원하는 포트 번호
}
```

### 모듈을 찾을 수 없음

의존성 재설치:
```bash
rm -rf node_modules
npm install
```

### 빌드 실패

TypeScript 에러 확인:
```bash
npm run type-check
```

## 📚 더 많은 정보

- **전체 문서**: `README.md` 참조
- **배포 가이드**: `DEPLOYMENT.md` 참조
- **프로젝트 구조**: `README.md`의 "프로젝트 구조" 섹션 참조

## 🎯 체크리스트

배포 전 확인사항:

- [ ] 연락처 정보 업데이트 (전화번호, 이메일)
- [ ] 프로필 사진 교체
- [ ] 경력 사항 확인
- [ ] 서비스 내용 검토
- [ ] SEO 메타 태그 확인 (`index.html`)
- [ ] favicon 교체 (선택사항)
- [ ] Google Analytics 추가 (선택사항)

## 💡 팁

1. **개발 중 핫 리로드**: 코드 수정 시 자동으로 브라우저가 새로고침됩니다
2. **Tailwind IntelliSense**: VS Code에서 Tailwind CSS IntelliSense 확장 설치 권장
3. **TypeScript**: 타입 에러는 개발 서버 콘솔에서 확인 가능
4. **성능 최적화**: Lighthouse로 성능 측정 (`Chrome DevTools > Lighthouse`)

---

문제가 있나요? GitHub Issues에 문의하세요!

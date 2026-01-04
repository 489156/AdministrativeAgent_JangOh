# 🚀 GitHub Pages 배포 가이드

이 문서는 김장오 행정사 사무소 웹사이트를 GitHub Pages에 배포하는 방법을 설명합니다.

## 📋 사전 준비

1. GitHub 계정 보유
2. Git 설치
3. Node.js 20.x 이상 설치

## 🔧 배포 설정

### 1단계: GitHub 저장소 생성

1. GitHub에서 새 저장소 생성
2. 저장소 이름: `kimjangoh-admin-services` (또는 원하는 이름)
3. Public 저장소로 설정 (GitHub Pages 무료 사용을 위해)

### 2단계: 로컬 코드를 GitHub에 푸시

```bash
# Git 초기화 (이미 되어있다면 생략)
git init

# 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/kimjangoh-admin-services.git

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: 김장오 행정사 사무소 웹사이트"

# main 브랜치로 푸시
git push -u origin main
```

### 3단계: GitHub Pages 설정

1. GitHub 저장소 페이지 방문
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Source: **GitHub Actions** 선택

### 4단계: 자동 배포 확인

1. 저장소의 **Actions** 탭으로 이동
2. "Deploy to GitHub Pages" 워크플로우가 실행되는지 확인
3. 워크플로우가 성공적으로 완료되면 배포 완료!

## 🌐 배포된 사이트 접속

배포가 완료되면 다음 URL로 접속할 수 있습니다:

```
https://YOUR_USERNAME.github.io/kimjangoh-admin-services/
```

### 커스텀 도메인 사용하기

1. 도메인 구매 (예: `kimjangoh.com`)
2. GitHub Pages 설정에서 **Custom domain** 입력
3. DNS 설정:
   - A 레코드 추가:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - CNAME 레코드 추가 (www):
     ```
     www.kimjangoh.com → YOUR_USERNAME.github.io
     ```
4. `public/CNAME` 파일 생성:
   ```
   kimjangoh.com
   ```

## 🔄 업데이트 배포

코드를 수정한 후 배포하려면:

```bash
# 변경 사항 추가
git add .

# 커밋
git commit -m "업데이트 내용 설명"

# 푸시 (자동으로 배포됨)
git push origin main
```

## ⚙️ Vite 설정 (중요!)

### base URL 설정

저장소 이름이 루트가 아닌 경우, `vite.config.ts`에서 base 설정이 필요합니다:

#### 케이스 1: 커스텀 도메인 사용 시 (kimjangoh.com)
```typescript
// vite.config.ts
export default defineConfig({
  base: '/',
  // ... 나머지 설정
})
```

#### 케이스 2: GitHub Pages 서브패스 사용 시
```typescript
// vite.config.ts
export default defineConfig({
  base: '/kimjangoh-admin-services/',
  // ... 나머지 설정
})
```

**현재 설정**: 이 프로젝트는 `base: '/'`로 설정되어 있습니다 (커스텀 도메인 또는 user.github.io 사용 가정).

저장소 이름으로 배포하는 경우 (예: `username.github.io/repo-name/`), 반드시 다음과 같이 수정하세요:

```typescript
base: '/YOUR-REPO-NAME/',
```

## 🐛 문제 해결

### 문제 1: 페이지가 표시되지 않음

**해결책**:
1. `vite.config.ts`의 `base` 설정 확인
2. GitHub Pages 설정에서 Source가 "GitHub Actions"인지 확인
3. Actions 탭에서 워크플로우 실행 로그 확인

### 문제 2: CSS나 이미지가 로드되지 않음

**해결책**:
- `base` URL 설정이 올바른지 확인
- 빌드 후 `dist` 폴더의 HTML 파일에서 경로 확인

### 문제 3: 워크플로우 실패

**해결책**:
1. Actions 탭에서 에러 로그 확인
2. 의존성 설치 문제: `pnpm install --frozen-lockfile` 실패 시
   - `pnpm-lock.yaml` 파일이 저장소에 포함되어 있는지 확인
3. 빌드 오류: TypeScript 타입 에러 수정

## 📊 배포 상태 모니터링

### GitHub Actions 뱃지 추가

`README.md`에 다음 뱃지를 추가하여 배포 상태를 표시할 수 있습니다:

```markdown
[![Deploy to GitHub Pages](https://github.com/YOUR_USERNAME/kimjangoh-admin-services/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/kimjangoh-admin-services/actions/workflows/deploy.yml)
```

## 🔐 보안 고려사항

1. **API 키**: 절대 GitHub에 커밋하지 마세요
   - `.env` 파일은 `.gitignore`에 포함되어 있습니다
   - GitHub Secrets를 사용하세요

2. **개인정보**: 실제 전화번호나 이메일을 코드에 하드코딩하지 마세요
   - 환경 변수나 설정 파일로 관리

## 📈 성능 최적화

배포된 사이트는 다음과 같이 최적화되어 있습니다:

- ✅ 코드 스플리팅 (vendor chunks)
- ✅ 이미지 최적화
- ✅ CSS 압축
- ✅ JavaScript 번들 최적화
- ✅ Source maps 생성 (디버깅용)

## 🎯 다음 단계

배포 후 다음을 고려하세요:

1. **Google Analytics** 추가
2. **Google Search Console** 등록
3. **SEO 최적화** (이미 기본 메타 태그 포함됨)
4. **성능 모니터링** (Lighthouse 등)
5. **사용자 피드백** 수집

## 📞 지원

배포 중 문제가 발생하면:
- GitHub Issues에 문제 보고
- [GitHub Pages 공식 문서](https://docs.github.com/en/pages) 참조
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html) 참조

---

**마지막 업데이트**: 2025년 1월

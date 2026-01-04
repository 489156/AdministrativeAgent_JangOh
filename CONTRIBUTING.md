# 🤝 기여 가이드

김장오 행정사 사무소 웹사이트 프로젝트에 기여해 주셔서 감사합니다!

## 📋 목차

- [개발 환경 설정](#개발-환경-설정)
- [코딩 스타일](#코딩-스타일)
- [커밋 컨벤션](#커밋-컨벤션)
- [Pull Request 프로세스](#pull-request-프로세스)
- [버그 리포트](#버그-리포트)
- [기능 제안](#기능-제안)

## 🚀 개발 환경 설정

### 1. 저장소 포크 및 클론

```bash
# 저장소 포크 후 클론
git clone https://github.com/YOUR_USERNAME/kimjangoh-admin-services.git
cd kimjangoh-admin-services

# 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/ORIGINAL_OWNER/kimjangoh-admin-services.git
```

### 2. 의존성 설치

```bash
# pnpm 사용 (권장)
pnpm install

# 또는 npm
npm install
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

### 4. 새 브랜치 생성

```bash
# 기능 추가
git checkout -b feature/새기능이름

# 버그 수정
git checkout -b fix/버그이름

# 문서 수정
git checkout -b docs/문서이름
```

## 🎨 코딩 스타일

### TypeScript

- **엄격한 타입 사용**: `any` 사용 지양
- **명시적 타입 정의**: 함수 반환 타입 명시
- **인터페이스 우선**: type보다 interface 선호

```typescript
// ✅ Good
interface UserProps {
  name: string;
  age: number;
}

function greet(user: UserProps): string {
  return `Hello, ${user.name}`;
}

// ❌ Bad
function greet(user: any) {
  return `Hello, ${user.name}`;
}
```

### React 컴포넌트

- **함수형 컴포넌트**: 화살표 함수보다 function 선언문 사용
- **Props 타입**: 항상 인터페이스로 정의
- **명명 규칙**: PascalCase (예: `UserProfile`)

```typescript
// ✅ Good
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ text, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button onClick={onClick} className={variant}>
      {text}
    </button>
  );
}

// ❌ Bad
export const Button = (props: any) => {
  return <button>{props.text}</button>;
};
```

### Tailwind CSS

- **유틸리티 클래스 우선**: 커스텀 CSS 최소화
- **반응형 디자인**: 모바일 퍼스트
- **일관된 간격**: theme.css의 변수 사용

```tsx
// ✅ Good
<div className="px-4 sm:px-6 lg:px-8 py-12">
  <h1 className="text-3xl md:text-4xl lg:text-5xl">Title</h1>
</div>

// ❌ Bad
<div style={{ padding: "48px", fontSize: "32px" }}>
  <h1>Title</h1>
</div>
```

### 파일 구조

```
컴포넌트명.tsx          # 컴포넌트 파일
├── export function     # Named export 사용
└── interface Props     # Props 타입 정의
```

## 📝 커밋 컨벤션

### 커밋 메시지 형식

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정
- **style**: 코드 포맷팅 (기능 변경 없음)
- **refactor**: 코드 리팩토링
- **test**: 테스트 추가/수정
- **chore**: 빌드 프로세스 또는 도구 변경

### 예시

```bash
feat(consultation): 상담 신청 폼에 파일 업로드 기능 추가

- 파일 선택 input 추가
- 파일 유효성 검사 구현
- 파일 미리보기 기능 추가

Closes #123
```

## 🔄 Pull Request 프로세스

### 1. 코드 변경

```bash
# 변경 사항 추가
git add .

# 커밋
git commit -m "feat: 새 기능 추가"

# upstream에서 최신 변경사항 가져오기
git fetch upstream
git rebase upstream/main

# 포크한 저장소에 푸시
git push origin feature/새기능이름
```

### 2. PR 생성

1. GitHub에서 Pull Request 생성
2. 제목과 설명 작성
3. 관련 이슈 링크 (있는 경우)
4. 스크린샷 첨부 (UI 변경 시)

### 3. PR 템플릿

```markdown
## 변경 사항
- 추가된 기능 또는 수정된 버그 설명

## 테스트
- [ ] 로컬에서 테스트 완료
- [ ] 빌드 성공 확인
- [ ] 반응형 테스트 완료

## 스크린샷
(UI 변경이 있는 경우)

## 관련 이슈
Closes #이슈번호
```

### 4. 코드 리뷰

- 리뷰어의 피드백에 응답
- 요청된 변경사항 반영
- 승인 후 머지

## 🐛 버그 리포트

버그를 발견하셨나요? 이슈를 생성해 주세요!

### 버그 리포트 템플릿

```markdown
## 버그 설명
명확하고 간결한 버그 설명

## 재현 방법
1. '...'로 이동
2. '....'를 클릭
3. '....'까지 스크롤
4. 오류 발생

## 예상 동작
어떤 동작이 예상되었는지 설명

## 스크린샷
가능하면 스크린샷 첨부

## 환경
- OS: [예: Windows 10]
- 브라우저: [예: Chrome 120]
- 화면 크기: [예: 1920x1080]

## 추가 정보
기타 버그와 관련된 정보
```

## 💡 기능 제안

새로운 기능을 제안하고 싶으신가요?

### 기능 제안 템플릿

```markdown
## 기능 설명
제안하는 기능에 대한 명확한 설명

## 문제점
이 기능이 해결하는 문제는?

## 해결 방법
제안하는 해결 방법

## 대안
고려한 다른 대안들

## 추가 정보
기타 관련 정보나 스크린샷
```

## ✅ 체크리스트

PR 제출 전 확인사항:

- [ ] 코드가 빌드되는가?
- [ ] ESLint 에러가 없는가?
- [ ] TypeScript 타입 에러가 없는가?
- [ ] 반응형 디자인이 작동하는가?
- [ ] 브라우저 콘솔에 에러가 없는가?
- [ ] 커밋 메시지가 컨벤션을 따르는가?
- [ ] 문서가 업데이트되었는가? (필요시)

## 🧪 테스트

```bash
# 타입 체크
pnpm type-check

# 린트
pnpm lint

# 빌드 테스트
pnpm build
```

## 📚 참고 자료

- [React 공식 문서](https://react.dev/)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Vite 가이드](https://vitejs.dev/guide/)

## 🙏 감사합니다

여러분의 기여가 이 프로젝트를 더 좋게 만듭니다!

궁금한 점이 있으시면 언제든지 이슈를 생성하거나 이메일(info@kimjangoh.com)로 문의해 주세요.

---

**Happy Coding! 🚀**

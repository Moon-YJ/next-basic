// 마스터 페이지(루트 페이지 = ex. App.jsx)
import Header from '../components/header/header';
import './styles/globals.scss';
import { Rubik_Maze } from 'next/font/google';

/*
  외부폰트 적용시 display 옵션별 기능
  참조링크: https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
  auto: 사용하는 브라우저의 user agent 설정값에 따라서 자동으로 외부폰트 적용설정을 사용
  block: 적은 대기시간 설정 후 외부폰트 적용될때까지 계속해서 시도
  swap: block보다 더 짧은 대기시간 설정 후 외부폰트 적용될때까지 계속해서 시도
  fallback: 대기시간도 짧게 설정하고 외부폰트 적용 시도도 짧게 처리해서 외부폰트 미적용시 바로 대체 시스템폰트 적용
  optional: 대기시간 짧게 설정하고 외부폰트 적용 시도하지않음

  block period: 외부폰트가 import 되기 전, 아무것도 보이지 않을때 대체폰트가 적용된 상태
  font swap: period: 외부폰트를 적용하려고 시도하는 상태
  failure period: 외부폰트 연결을 실패로 인지하는 상태
*/

const rubik = Rubik_Maze({
	weight: '400',
	subsets: ['latin'],
	display: 'swap', // 기존 폰트 보이다가 구글폰트로 바꿔치기
	preload: true, // subsets가 지정되어있을시 해당 기능 사용 가능
	variable: '--font-rubik', // 직접 변수명 등록
});

export const metadata = {
	title: 'Next.js',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			{/* 직접 등록한 폰트 변수명 추가시 해당 JSX요소 안쪽에서는 css에서 변수명으로 폰트 사용 가능 */}
			<body className={`wrap ${rubik.variable}`}>
				<Header />
				{/* 구글서버에서 가져온 폰트는 최적화가 되어있지않으므로 network탭에서 확인해보면 똑같은 폰트임에도 불구하고 next 자체적으로 최적화(font optimization)시켜서 가져온 폰트보다 40%정도 파일용량이 더 큼 */}
				<h1 className='roboto'>No Google Font</h1>
				{/* font optimization */}
				<h1 className={rubik.className}>Apply Google Font</h1>
				<h1 className='rubik'>Google Font</h1>
				{children}
			</body>
		</html>
	);
}

/*
  Next에서의 기능별 컴포넌트 구분 

  - Page Component
    : 페이지로 출력될 틀 컴포넌트
    : about/page.jsx, gallery/page.jsx
    : 따로 설정하지 않으면 기본적으로 서버에서 동작돼서 prepage로 사전 랜더링

  - Partial Component
    : 페이지 안쪽에서 호출되면서 부분적인 UI나 기능을 담당하는 컴포넌트 
    : components>header.jsx, components/popup.jsx
*/

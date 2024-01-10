// layout.js 내부에 children으로 들어가는 페이지
import Image from 'next/image';
import styles from './main.module.scss';
console.log(styles); // 해당 콘솔은 터미널에 찍힘(서버로 동작하기 때문)

//import pic from './pic.jpg';
import clsx from 'clsx';
import pic2 from '@/public/pic.jpg';
import test from '@/public/test.jpg';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Main 페이지</h1>
			{/* <div className={clsx(styles.pic)}>
				<img src={pic.src} alt='image' />
			</div> */}
			<div className={clsx(styles.pic)}>
				{/* fill을 추가하거나 아니면 width, height 값 넣어줘야 next가 미리 값을 읽을 수 있음 */}
				<Image
					src={pic2}
					alt='image'
					width={500}
					height={500}
					quality={75}
					priority
				/>
			</div>
			<div className={clsx(styles.pic)}>
				{/* priority 설정하면 먼저 랜더링됨 */}
				{/* lazy loading이 해제되므로 주의해야함, 보통 화면에 첫번째로 보이는 이미지에 priority속성 추가하는것을 권장 */}
				<Image
					src={test}
					alt='image'
					fill
					quality={75}
					// 속성이 fill일때는 next가 크기 산정이 어려우므로 특정 크기 미만의 브라우저 폭에 대한 사이즈 크기 지정 권장
					// min-width: 808px이면 50vw, 아니면 100vw
					sizes='(min-width: 808px) 50vw, 100vw'
				/>
				<div className={clsx(styles.pic)}>
					<Image
						src={test}
						alt='image'
						quality={75}
						fill
						sizes='(min-width: 808px) 50vw, 100vw'
						placeholder='blur'
					/>
				</div>
			</div>
		</main>
	);
}

/*
  Next에서 Image 컴포넌트를 사용해야하는 이유
  - LCP(Largest Contentful Paint): 웹페이지 로딩속도 측정시 콘텐츠에 있는 이미지나 영상처럼 용량이 큰 소스까지 측정에 포함시키는 방식 (Image 컴포넌트는 LCP 성능점수를 높이기 위함)

  1. 원본 빌드시에 import한 뒤, 브라우저 크기에 따른 이미지 용량을 자동으로 최적화시키고
  2. 클라이언트 요청이 들어올때 미리 최적화시킨 이미지를 랜더링
  3. quality={}로 직접 최적화 가능 (0 ~ 100까지 설정 가능, default값은 75)
  4. priority 속성을 이용해서 빨리 출력해야되는 이미지에 우선순위 부여 가능 
  5. 기본적으로 Image 컴포넌트 lazy loading기능을 적용하는데 priority 설정하면 lazy loading 기능은 강제 해제됨 (주의)
    --> lazy loading: viewport에 보이는 이미지만 랜더링을 하고, 문서에 있지만 viewport에 보이지 않으면 로딩을 미루다가 근접했을때 랜더링
  6. Image 컴포넌트 호출시 가급적 width, height 속성을 지정해야 next가 빌드시 해당 사이즈에 맞는 최적화 작업을 할 수 있음
  7. 이미지의 크기가 고정값이 아닐때에는 fill 속성 추가 (연결되어있는 style의 넓이, 높이를 판단해서 최적화)
    --> fill 속성 적용시 추가적으로 하면 좋은 속성: sizes
  8. placeholder='blur'로 지정시(로컬이미지일때) 미리 용량은 blur 이미지를 먼저 출력하고 전체 이미지 랜더링 완료시 변경처리(주의: placeholder 지정시 lazy loading기능 강제 해제됨, priority 적용시에는 placeholder 적용 안됨)
  
  ==> 처음 마운트시 화면에 보일 큰 이미지에 적용할 수 있는 두가지 옵션
      : priority 지정 or placeholder 지정
*/

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
				<Image src={pic2} alt='image' fill quality={75} />
			</div>
			<div className={clsx(styles.pic)}>
				{/* priority 설정하면 먼저 랜더링됨 */}
				<Image src={test} alt='image' fill quality={75} priority />
			</div>
		</main>
	);
}

/*
  Next에서 Image 컴포넌트를 사용해야하는 이유
  1. 원본 빌드시에 import한 뒤, 브라우저 크기에 따른 이미지 용량을 자동으로 최적화시키고
  2. 클라이언트 요청이 들어올때 미리 최적화시킨 이미지를 랜더링
  3. quality={}로 직접 최적화 가능 (0 ~ 100까지 설정 가능, default값은 75)
  4. priority 속성을 이용해서 빨리 출력해야되는 이미지에 우선순위 부여 가능 
  5. 기본적으로 Image 컴포넌트 lazy loading기능을 적용하는데 priority 설정하면 lazy loading 기능은 강제 해제됨 (주의)
*/

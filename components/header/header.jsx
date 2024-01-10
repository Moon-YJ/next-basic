'use client'; // 컴포넌트는 서버 기반으로 동작, 따라서 클라이언트 기반 기능 쓰기 위해서는 해당 구문 입력
import styles from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<ul>
				<li>
					{/* 개발자도구 확인해보면 header, on의 클래스명이 임의로 들어가있음 ==> 따라서 'on'이 아닌 styles.on을 넣어야함 */}
					<Link href='/' className={pathname === '/' ? styles.on : ''}>
						main
					</Link>
				</li>
				<li>
					<Link
						href='/about'
						className={pathname === '/about' ? styles.on : ''}
					>
						about
					</Link>
				</li>
				<li>
					<Link
						href='/gallery'
						className={pathname === '/gallery' ? styles.on : ''}
					>
						gallery
					</Link>
				</li>
				<li>
					<Link href='/post' className={pathname === '/post' ? styles.on : ''}>
						post
					</Link>
				</li>
			</ul>
		</header>
	);
}

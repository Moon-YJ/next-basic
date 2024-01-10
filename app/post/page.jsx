'use client'; // react-query 훅 쓰는 컴포넌트도 use client 구문 추가
import PostList from '@/components/postList/postList';
import styles from './post.module.scss';
import clsx from 'clsx';

// 정적인 콘텐츠와 동적인 콘텐츠가 포함된 컴포넌트를 분리(hydration)
export default function Post() {
	return (
		<section className={clsx(styles.post)}>
			<h1>Post List</h1>
			{/* 동적인 콘텐츠 */}
			<PostList />
		</section>
	);
}

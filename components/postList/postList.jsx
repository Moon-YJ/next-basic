import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PostList() {
	const [Posts, setPosts] = useState([]);
	const pathname = usePathname();

	useEffect(() => {
		// 함수 자체를 useEffect안에 집어넣어서 호출하면 useCallback 사용안해도 됨
		const fetchPosts = async (url) => {
			const data = await fetch(url);
			const json = await data.json();
			setPosts(json);
		};
		fetchPosts('https://jsonplaceholder.typicode.com/posts');
	}, []);

	return (
		<ul className='postList'>
			{Posts.map((post, idx) => {
				if (idx >= 10) return null;
				return (
					<li key={post.id}>
						{/* prefetch default값은 true */}
						<Link href={`/post/${post.id}`} prefetch={true}>
							{post.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

/*
	Next에서는 Link 컴포넌트를 이용해서 라우터 연결시
	해당 라우터에 mapping되어있는 컴포넌트 데이터를 해당 컴포넌트 페이지에서 쓰이지 않더라도 미리 백단에서 prefetch 처리함으로써 추후 라우터를 클릭했을때 빠른 페이지 전환이 가능하도록 처리

	prefetch 기능은 개발버전(npm run dev)으로 확인 불가하고 npm run build로 빌드한 뒤, npm run start로 production 모드로 구동해야지 확인 가능

	Next14에서 달라진 prefetch 동작 방식
	- 기존 13에서는 실제 Link컴포넌트 위에 마우스 호버를 해야 prefetching이 일어난 반면
	- Next14에서는 hover하지 않더라도 Link컴포넌트에서 중요한 데이터는 모두 prefetch처리
	- Link prefetch={true} 기능 활성화(default) / prefetch={false}
*/

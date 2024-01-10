import { useEffect, useState } from 'react';

export default function PostList() {
	const [Posts, setPosts] = useState([]);

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
				return <li key={post.id}>{post.title}</li>;
			})}
		</ul>
	);
}

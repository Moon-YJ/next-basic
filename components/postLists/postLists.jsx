'use client';

import { useEffect, useState } from 'react';

export default function PostLists() {
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async (url) => {
			const data = await fetch(url, { method: 'GET' });
			const json = await data.json();
			console.log(json.result);
			setPosts(json.result);
		};
		fetchPost('/api/post');
	}, []);

	return (
		<div className='postLists'>
			{Posts.map((post) => {
				return (
					<article key={post.name}>
						<h2>{post.name}</h2>
					</article>
				);
			})}
		</div>
	);
}

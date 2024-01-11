'use client';

import { useEffect, useState } from 'react';

export default function PostsDetail({ params }) {
	const [Post, setPost] = useState([]);

	useEffect(() => {
		const fetchPostById = async (url) => {
			const data = await fetch(url, { method: 'GET' });
			const json = await data.json();
			setPost(json.result);
		};
		fetchPostById(`/api/post/${params.id}`);
	}, [params.id]);

	return (
		<div className='page'>
			<h2>{params.id}번째 상세페이지</h2>
			<h3>{Post.name}</h3>
			<h3>{Post.age}</h3>
		</div>
	);
}

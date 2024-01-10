'use client';
import { useEffect, useState } from 'react';

export default function PostDetail({ params }) {
	const [Post, setPost] = useState(null);
	useEffect(() => {
		const fetchPostById = async (url) => {
			const data = await fetch(url);
			const json = await data.json();
			setPost(json);
		};
		fetchPostById(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
	}, [params.id]);

	return (
		<div className='detail'>
			<h2>{Post?.title}</h2>
			<p>{Post?.body}</p>
		</div>
	);
}

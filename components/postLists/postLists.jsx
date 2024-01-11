'use client';

import { useEffect, useState } from 'react';

export default function PostLists() {
	const [Posts, setPosts] = useState('');

	useEffect(() => {
		const fetchPost = async (url) => {
			const data = await fetch(url, { method: 'GET' });
			const json = await data.json();
			setPosts(json);
			console.log(json);
		};
		fetchPost('/api/post');
	}, []);

	return <div className='postLists'></div>;
}

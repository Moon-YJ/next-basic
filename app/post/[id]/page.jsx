'use client';
import React, { useEffect, useState } from 'react';

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
			{/* <p>
				{Post?.body.split('\n').map(txt => {
					return <p key={txt + idx}>{txt}</p>;
				})}
			</p> */}
			<p>
				{Post?.body.split('\n').map((txt) => {
					return (
						// <> 빈 fragment에 key값 넣어야할때 React 컴포넌트 호출하면 됨
						<React.Fragment key={txt}>
							{txt}
							<br />
						</React.Fragment>
					);
				})}
			</p>
		</div>
	);
}

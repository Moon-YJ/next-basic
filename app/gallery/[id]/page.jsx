'use client';
// ***사용자가 실시간으로 누를때마다 id가 바뀌므로 use client 구문을 입력해야 params값이 바뀜

// Dynamic Routing
// 중첩 폴더 안쪽에 [변수명] 형식으로 폴더 생성 후 그 안에 page.jsx 생성
// --> 해당 페이지 컴포넌트에서는 params 객체가 props로 전달되고 해당 객체 안에는 대괄호 안의 변수명이 property로 url에 전달된 params값을 전달 받을 수 있음
export default function GalleryDetail({ params }) {
	console.log(params);
	return (
		<div className='detail'>
			<h3>{params.id} - gallery detail page</h3>
		</div>
	);
}

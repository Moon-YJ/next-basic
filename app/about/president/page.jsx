// 서버 기반이므로 useEffect나 useState못씀
// 따라서 함수로 데이터 fetching
async function fetchPresident() {
	const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const json = await data.json();
	return json;
}

// 특정 폴더 안쪽에 다시 하위 폴더를 만들고 그 안에 page.jsx를 생성하면
// 특정 페이지에 종속된 하위 페이지 라우팅 설정 가능(중첩 라우팅 = Nested Routing)
// 해당 컴포넌트는 서버 컴포넌트이기 때문에 기본적으로 클라이언트에서만 동작하는 React 내장 hook(useState, useEffect, useRef) 사용불가
// 해당 비동기 데이터는 서버쪽에서 페이지가 빌드될때 한번 만들어지고 클라이언트에서 요청이 들어올때 미리 빌드된 페이지를 보내주기 때문에
// 브라우저가 불필요한 비동기 데이터 통신 하지 않음 (이미 한번 만들어진 데이터는 재호출되지 않음)
export default async function President() {
	const data = await fetchPresident();
	// 서버 데이터이므로 terminal창에서 확인할 수 있음
	console.log(data);
	return (
		<div className='page'>
			<h3>President</h3>
		</div>
	);
}

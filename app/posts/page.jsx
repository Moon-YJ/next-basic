import PostLists from '@/components/postLists/postLists';
import styles from './posts.module.scss';
import clsx from 'clsx';

export default function Posts() {
	return (
		<section className={clsx(styles.posts)}>
			<h1>Post List</h1>
			<PostLists />
		</section>
	);
}

/*
  frontend
  - 사용자가 URL 요청시 그에 출력될 UI 컴포넌트들을 미리 설정한 라우터에 따라 출력하는 로직
  - 사용자 이벤트 발생시 비동기 데이터를 요청(request)해서 서버로부터 응답받은(response) 데이터를 다시 UI로 변환후 출력
  - 서버로 RESTful 방식으로 요청을 보내기 위해서는 fetch로 method 방식을 구분해서 보냄
  - fetch(url+QueryString,{ method: 'GET' }) : GET 방식 요청
  - fetch(url+QueryString,{ method: 'POST', body: 전달할 데이터 }) : POST 방식 요청
  - fetch(url+QueryString,{ method: 'PUT', body: 수정할 데이터}): PUT 방식 요청
  - fetch(url+QueryString,{ method: 'DELETE' }) : DELETE 방식 요청

  backend
  - 클라이언트로부터 넘어오는 요청 형식에 맞게 응답처리 로직 분기처리(Server routing)
  - 백엔드가 전달받는 요청은 크게 네가지(CRUD) -> RESTful API(CRUD를 구조적으로 처리하기 위한 개발 방법론)
  - Create (POST): 중요한 데이터 전달(브라우저의 body객체를 통해)
  - Read (GET): 쿼리문이나 파라미터같이 덜 중요한 데이터 전달(url의 쿼리스트링을 통해)
  - Update (PUT): 중요한 데이터 전달(브라우저의 body객체를 통해)
  - Delete (DELETE): 쿼리문이나 파라미터같이 덜 중요한 데이터 전달(url의 쿼리스트링을 통해)
*/

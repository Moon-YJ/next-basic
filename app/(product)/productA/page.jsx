// Skip Routing (특정 라우터 경로를 생략)
// 개발 여건상 부득이하게 중첩된 페이지 컴포넌트 폴더가 많은 경우
// 중간 단계의 폴더명을 () 괄호로 묶어놓으면 해당 라우터 경로를 skip
export default function Page() {
  return (
    <div className="page">
      <h3>ProductA</h3>
    </div>
  );
}

import styles from "./about.module.scss";

// next에서는 기본적으로 app폴더 안쪽에 폴더명을 라우터 이름으로 설정하고
// 그 안에 page.jsx 페이지를 해당 라우터명에 연결(/about - 루트 경로로 페이지 생성)
// scss파일명은 임의로 설정 가능
export default function About() {
  return (
    <main className={styles.about}>
      <h1>About 페이지</h1>
    </main>
  );
}

// layout.js 내부에 children으로 들어가는 페이지
import styles from "./main.module.scss";
console.log(styles);
// 해당 콘솔은 터미널에 찍힘(서버로 동작하기 때문)

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main 페이지</h1>
    </main>
  );
}

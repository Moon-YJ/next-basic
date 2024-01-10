import styles from "./gallery.module.scss";

export const generateMetadata = () => {
  return {
    title: "Gallery page",
    description: "Information of Gallery",
  };
};

export default function Gallery() {
  return (
    <main className={styles.gallery}>
      <h1>Gallery 페이지</h1>
    </main>
  );
}

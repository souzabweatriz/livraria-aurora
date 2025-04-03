import styles from "../styles/CardBook.module.css";

export default function HighlightWeek({ url, name, author, gender, price }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img src={url} alt="" />
      </div>
      <div className={styles.containerDesc}>
        <h4 className={styles.bookName}>{name}</h4>
        <p className={styles.author}>{author}</p>
        <p className={styles.genderBook}>{gender}</p>
        <h5 className={styles.price}>{price}</h5>
      </div>
    </div>
  );
}

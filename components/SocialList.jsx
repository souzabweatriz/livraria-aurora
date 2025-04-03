import styles from "../styles/SocialCard.module.css";

export default function SocialCard({ url, link, name }) {
    return (
        <li className={styles.container}>
            <img className={styles.image} src={url} alt=""/>
            <a className={styles.socialName} target="_blank" href={link}>{name}</a>
        </li>
    );
}
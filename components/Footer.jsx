import styles from "../styles/Footer.module.css";
import { socialList } from "../data/socialList";

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.sectionText}>
                    <img src="" alt="" />
                    <p>Aurora é uma livraria online que conecta leitores das mais diversas categorias </p>
                    </div>
                <div className={styles.sectionLinks}>

                </div>
                <div className={styles.sectionCategory}>

                </div>
                <div className={styles.sectionSocialList}>

                </div>
            </div>
        </footer>
    );
}
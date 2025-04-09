import styles from "../styles/Assine.module.css"
import Button from "../components/Button"

export default function Assine(){
    return(
        <div className={styles.section}>
            <h2 className={styles.title}>Fique por dentro das novidades!</h2>
            <p className={styles.description}>Assine nossa newsletter e receba diversas atualizações sobre novos lançamentos, promoções e dicas de leitura!</p>
            <input className={styles.input} type="text" placeholder="Seu melhor e-mail!" />
            <Button props="Assinar" />
        </div>
    )
};
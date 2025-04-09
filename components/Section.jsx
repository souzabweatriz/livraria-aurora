import styles from "../styles/Section.module.css"
import Button from "../components/Button"

export default function Section({title, description}){
    return(
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Button props="Veja Aqui"/>
        </div>
    )
};
import styles from "../styles/CategoryList.module.css"

export default function Popular({ image, name }){
    return(
        <main className={styles.bloco}>
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
            <p className={styles.name}>{name}</p>
        </div>
        </main>
    )
};
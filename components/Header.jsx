import styles from "../styles/Header.module.css"

export default function Header() {
    <header>
        <div className={styles.header}>
            <div className={styles.logo}>
                <h2 className={styles.title}>

                </h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.list}> <a href="/">Início</a></li>
                <li className={styles.list}> <a href="/">Livros</a></li>
                <li className={styles.list}> <a href="/">Categorias</a></li>
                <li className={styles.list}> <a href="/">Categorias</a></li>
                <li className={styles.list}> <a href="/">Autores</a></li>
                <li className={styles.list}> <a href="/">Ofertas</a></li>
            </ul>
            <input className={styles.input} type="text" placeholder="Buscar" />
            <ul className={styles.icons}>
                <li className={styles.list}>
                    
                </li>
            </ul>
        </div>
    </header>
}
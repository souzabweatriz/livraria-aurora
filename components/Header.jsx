import styles from "../styles/Header.module.css";
import Image from "next/image";
import Aurora from "../public/Aurora.png"

export default function Header() {
    <header>
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={Aurora} alt="Logo da livraria" />
                <h2 className={styles.title}>Livraria Aurora</h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.list}>
                    <a href="/">Início</a>
                </li>
                <li className={styles.list}>
                    <a href="/">Livros</a>
                </li>
                <li className={styles.list}>
                    <a href="/">Categorias</a>
                </li>
                <li className={styles.list}>
                    <a href="/">Autores</a>
                </li>
                <li className={styles.list}>
                    <a href="/">Ofertas</a>
                </li>
            </ul>
            <input className={styles.input} type="text" placeholder="Buscar" />
        </div>
    </header>;
}

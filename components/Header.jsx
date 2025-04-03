import styles from "../styles/Header.module.css";
import Image from "next/image";
import Aurora from "../public/Aurora.png";
import IconList from "./IconList";
import {iconList} from "../data/iconList"

export default function Header() {
    return(
    <header> 
        <div className={styles.header}>
            <div className={styles.container}>
                <Image className={styles.logo} src={Aurora} alt="Logo da livraria" />
                <h2 className={styles.title}>Livraria Aurora</h2>
            </div>
            <ul className={styles.links}>
                <li>
                    <a className={styles.list} href="/">Início</a>
                </li>
                <li>
                    <a className={styles.list} href="/">Livros</a>
                </li>
                <li>
                    <a className={styles.list} href="/">Categorias</a>
                </li>
                <li>
                    <a className={styles.list} href="/">Autores</a>
                </li>
                <li>
                    <a className={styles.list} href="/">Ofertas</a>
                </li>
            </ul>
            <div className={styles.pesquisa}>
            <input className={styles.input} type="text" placeholder="🔎 Buscar" />
            </div>
            <ul className={styles.icons}>
                {iconList.map((icon, index) => (
                    <IconList key={index} image={icon.image}/>
                ))}
            </ul>
        </div>
    </header>
    )
}

import Aurora from "../public/Aurora.png";
import SocialCard from "../components/SocialList";
import Image from "next/image";

import styles from "../styles/Footer.module.css";
import { socialList } from "../data/socialList";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.sectionText}>
                    <Image className={styles.image} src={Aurora} alt="" />
                    <p className={styles.text}>Aurora é uma livraria online que conecta leitores das mais diversas categorias. Com todo amor e carinho, tentamos trazer conforto e preços acessíveis!</p>
                    </div>
                <div className={styles.sectionLinks}>
                    <h3 className={styles.title}>Links Rápidos</h3>
                    <li>Home</li>
                    <li>Catálogo</li>
                    <li>Ofertas</li>
                    <li>Sobre Nós</li>
                    <li>Contato</li>
                </div>
                <div className={styles.sectionCategory}>
                    <h3 className={styles.title}>Categorias</h3>
                    <li>Romance</li>
                    <li>Terror</li>
                    <li>Comédia</li>
                    <li>Suspense</li>
                    <li>Drama</li>

                </div>
                <div className={styles.sectionSocialList}>
                <ul className="footer">
                    <h3 className={styles.title}>Rede Social</h3>
                    {socialList.map((social, index) => (
                        <SocialCard key={index} url={social.url} link={social.link} name={social.name} />
                    ))}
                </ul>
                </div>
            </div>
            <div className={styles.copy}>
                <p >&copy; 2024 Livraria Aurora. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardBook from "../../components/CardBook";
import Section from "../../components/Section";

import styles from "./home.module.css"
import { highlightList } from "../../data/highlightList";

export default function Home(){
    return(
        <div className={styles.pageHome}>
            <Section title="Descubra milhares de Universos" description="Promoção de livros com até 20% de desconto"/>
            <Header />
            <main>
                <div className={styles.highlightWeek}>
                    <h3 className={styles.title}>Destaques da semana</h3>
                <ul className={styles.highlights}>
                    {highlightList.map((card, index) => (
                        <CardBook key={index} url={card.url} name={card.name} author={card.author} gender={card.gender} price={card.price} />
                    ))}
                </ul>
                </div>
            </main>
            <Footer />
        </div>
    )
}

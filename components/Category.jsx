import { categoryList } from "@/data/categoryList"
import styles from "../styles/Category.module.css"
import Popular from "../components/CategoryList"

export default function Category(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Categorias Populares</h2>
            <div className={styles.bloco}>
                {categoryList.map(( category, index)=>(
                    <Popular key={index} image={category.image} name={category.name} />
                ))}
            </div>
        </div>
    )
}
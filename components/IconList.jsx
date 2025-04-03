import styles from "../styles/IconList.module.css"

export default function IconList({image}) {
    return (
        <li className={styles.container}>
            <img className={styles.image} src={image} alt=""/>
        </li>
    )
}
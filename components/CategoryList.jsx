export default function Popular({ image, name }){
    return(
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
        </div>
    )
}
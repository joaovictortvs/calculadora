import styles from './Visor.module.css'

function Visor({valor}){

    return(
        <div className={styles.visor}>
            <p>{valor}</p>
        </div>
    )

}

export default Visor
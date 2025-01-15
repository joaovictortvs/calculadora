import styles from './Visor.module.css'

function Visor({valor, calculando}){

    return(
        <div className={styles.visor}>
            <p>{valor || calculando}</p>
        </div>
    )

}

export default Visor
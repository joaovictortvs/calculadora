import styles from './MsgErro.module.css'

function MsgErro({clickBtn}){

    return(
        <div className={styles.msgErro}>
            <div className={styles.msg}>
                <p>Erro! Não é possível adicionar 2 operadores.</p>
                <button onClick={()=> clickBtn()}>OK</button>
            </div>    
        </div>
    )

}

export default MsgErro
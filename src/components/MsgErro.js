import styles from './MsgErro.module.css'

function MsgErro({clickBtn}){

    return(
        <div className={styles.msgErro}>
            <p>Erro, não é possível adicionar 2 operadores.</p>
            <button onClick={()=> clickBtn()}>Ok</button>
        </div>
    )

}

export default MsgErro
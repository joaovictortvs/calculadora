import styles from './Buttons.module.css'

function Buttons({NumeroClick, Operacao}){

    return(
        <div className={styles.buttons}>
            <div className={styles.buttonRows}>
                <button onClick={()=> NumeroClick('7')}>7</button>
                <button onClick={()=> NumeroClick('8')}>8</button>
                <button onClick={()=> NumeroClick('9')}>9</button>
                <button className={styles.btnFunction} onClick={()=>{Operacao('CE')}}>CE</button>
            </div>    
            <div className={styles.buttonRows}>
                <button onClick={()=> NumeroClick('6')}>6</button>
                <button onClick={()=> NumeroClick('5')}>5</button>
                <button onClick={()=> NumeroClick('4')}>4</button>
                <button className={styles.btnFunction} onClick={()=> Operacao('*')}>X</button>
            </div> 
            <div className={styles.buttonRows}>
                <button onClick={()=> NumeroClick('2')}>2</button>
                <button onClick={()=> NumeroClick('1')}>1</button>
                <button onClick={()=> NumeroClick('0')}>0</button>
                <button className={styles.btnFunction} onClick={()=> Operacao(' + ')}>+</button>
            </div>   
            <div className={styles.buttonRows}>
                <button className={styles.btnEqual} onClick={()=> Operacao('=')}>=</button>
                <button className={styles.btnFunction} onClick={()=> Operacao(' / ')}>/</button>
                <button className={styles.btnFunction} onClick={()=> Operacao(' - ')}>-</button>
            </div>
            
        </div>
    )

}

export default Buttons
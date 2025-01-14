import styles from './Buttons.module.css'

function Buttons(){

    return(
        <div className={styles.buttons}>
            <div className={styles.buttonRows}>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className={styles.btnFunction}>CE</button>
            </div>    
            <div className={styles.buttonRows}>
                <button>6</button>
                <button>5</button>
                <button>4</button>
                <button className={styles.btnFunction}>X</button>
            </div> 
            <div className={styles.buttonRows}>
                <button>2</button>
                <button>1</button>
                <button>0</button>
                <button className={styles.btnFunction}>+</button>
            </div>   
            <div className={styles.buttonRows}>
                <button className={styles.btnEqual}>=</button>
                <button className={styles.btnFunction}>/</button>
                <button className={styles.btnFunction}>-</button>
            </div>
            
        </div>
    )

}

export default Buttons
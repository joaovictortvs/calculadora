import styles from './Buttons.module.css'

function Buttons({onButtonClick}){

    return(
        <div className={styles.buttons}>
            <div className={styles.buttonRows}>
                <button onClick={()=> onButtonClick('7')}>7</button>
                <button onClick={()=> onButtonClick('8')}>8</button>
                <button onClick={()=> onButtonClick('9')}>9</button>
                <button className={styles.btnFunction} onClick={()=>{onButtonClick('CE')}}>CE</button>
            </div>    
            <div className={styles.buttonRows}>
                <button onClick={()=> onButtonClick('6')}>6</button>
                <button onClick={()=> onButtonClick('5')}>5</button>
                <button onClick={()=> onButtonClick('4')}>4</button>
                <button className={styles.btnFunction} onClick={()=> onButtonClick('x')}>X</button>
            </div> 
            <div className={styles.buttonRows}>
                <button onClick={()=> onButtonClick('2')}>2</button>
                <button onClick={()=> onButtonClick('1')}>1</button>
                <button onClick={()=> onButtonClick('0')}>0</button>
                <button className={styles.btnFunction} onClick={()=> onButtonClick('+')}>+</button>
            </div>   
            <div className={styles.buttonRows}>
                <button className={styles.btnEqual} onClick={()=> onButtonClick('=')}>=</button>
                <button className={styles.btnFunction} onClick={()=> onButtonClick('/')}>/</button>
                <button className={styles.btnFunction} onClick={()=> onButtonClick('-')}>-</button>
            </div>
            
        </div>
    )

}

export default Buttons
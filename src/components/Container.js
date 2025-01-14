import styles from './Container.module.css'
import {useState} from 'react'
import Visor from './Visor'
import Buttons from './Buttons'

function Container(){
    const [display, setDisplay] = useState('')
    const [result, setResult] = useState(null)

   // criar função para calcular, usei o chatgpt pra me guiar, até pq estou iniciando no react

    return(
        <div className={styles.calculadora}>
            <Visor valor={result !== null ? result : '0'}/>
            <Buttons onButtonClick={handleButtonClick}/>
        </div>
    )
}

export default Container
import styles from './Container.module.css'
import {useState} from 'react'
import Visor from './Visor'
import Buttons from './Buttons'

function Container(){
    const [display, setDisplay] = useState('')
    const [result, setResult] = useState('0')

   function Calcular(valor){
        if(valor === "="){
            const evalResult = eval(display)
            setResult(evalResult.toString())
            setDisplay('')
        } else if(valor === "CE"){
            setDisplay('')
            setResult('0')
        } else{
           setDisplay(prevDisplay => prevDisplay + valor)
        }
   }

    return(
        <div className={styles.calculadora}>
            <Visor valor={result !== '0' ? result : '0'} calculando={display}/>
            <Buttons onButtonClick={Calcular}/>
        </div>
    )
}

export default Container
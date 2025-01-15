import styles from './Container.module.css'
import {useState} from 'react'
import Visor from './Visor'
import Buttons from './Buttons'

function Container(){
    const [display, setDisplay] = useState('0')
    const [result, setResult] = useState(null)

   function AddVisor(valor){
        if(display === '0'){
            setDisplay(valor)
        } else{
            setDisplay(prevDisplay=> prevDisplay + valor)
        }
   }

   function Calcular(operador){
        if(operador === "="){
            setResult(eval(display))
        } else if(operador === "CE"){
            setDisplay('0')
            setResult(null)
        } else{
            setDisplay(valor=> valor + operador)
        }
   }

    return(
        <div className={styles.calculadora}>
            <Visor valor={result !== null ? result : display}/>
            <Buttons NumeroClick={AddVisor} Operacao={Calcular}/>
        </div>
    )
}

export default Container
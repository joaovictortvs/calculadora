import styles from './Container.module.css'

import {useState} from 'react'

import Visor from './Visor'
import Buttons from './Buttons'
import MsgErro from './MsgErro'

function Container(){
    const [display, setDisplay] = useState('0')
    const [result, setResult] = useState(null)
    const [stateOperador, setStateOperador] = useState(false)
    const [erroOperador, setErroOperador] = useState(false)


   function AddVisor(valor){
        if(display === '0'){
            setDisplay(valor)
        } else{
            setDisplay(prevDisplay=> prevDisplay + valor)
        }

        if(stateOperador){
            setStateOperador(false)
        }
   }

   function erroEntendido(){
        setErroOperador(false)
   }

   function Calcular(operador){

        if(operador === "="){
            setResult(eval(display))
            setStateOperador(false)
        } else if(operador === "CE"){
            setDisplay('0')
            setResult(null)
            setStateOperador(false)
        } else{
            if(stateOperador){
                setErroOperador(true)
                return
            }

            if(result !== null){
                setDisplay(result + operador)
                setStateOperador(true)
                setResult(null)
            } else{
                setErroOperador(false)
                setStateOperador(true)
                setDisplay(valor=> valor + operador)
            }
        }
   }

    return(
        <div className={styles.calculadora}>
            {erroOperador && (
                <MsgErro clickBtn={erroEntendido}/>
            )}
            <Visor valor={result !== null ? result : display}/>
            <Buttons NumeroClick={AddVisor} Operacao={Calcular}/>
        </div>
    )
}

export default Container
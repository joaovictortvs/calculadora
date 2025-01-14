import styles from './Container.module.css'
import Visor from "./Visor"
import Buttons from "./Buttons"

function Container(){

    return(
        <div className={styles.calculadora}>   
            <Visor/>
            <Buttons/>
        </div>
    )

}

export default Container
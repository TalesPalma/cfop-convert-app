import { useState } from 'react'
import './Form.css'

const Form = () => {

    const [cfopInput, setCfopInput] = useState('')
    const [selectInput, setSelectInput] = useState('')
    let [cfop,setCfop] = useState(cfopInput)

    const onClick = () => {
            switch (cfopInput) {
            case "5401":
                setCfop("CFOP 1407");
                break;
            case "6401":
                setCfop("CFOP 2407");
                break;
            default:
                setCfop("CFOP 1556");
                break;
        }
    }


    return (
        <div className='form-container'>
            <form>
                <h1>{cfop}</h1>
                <div className='input-container'>
                    <label >Entre com o cfop:</label>
                    <input
                        placeholder="Entre com o cfop"
                        type="text" value={cfopInput}
                        onChange={(e) => setCfopInput(e.target.value)}
                        className="input"
                    />
                    <div className="underline"></div>
                    <select>
                        <option value="cfop 1">UTILIZADOS PARA USO E CONSUMO</option>
                        <option value="cfop 2">UTILIZADOS PARA INDUSTRIALIZAÇÃO</option>
                    </select>
                </div>
                <button type="button" onClick={onClick} >Converter</button>
            </form>
        </div>
    )
}

export default Form

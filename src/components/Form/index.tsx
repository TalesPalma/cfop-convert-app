import { useState } from 'react'
import './Form.css'
import { cfop_compra } from '../../dates/cfopDates';
import getCfopDescription from '../../helpers/cfopsConvert';

const Form = () => {

    const [cfopInput, setCfopInput] = useState('5401');
    const [selectInput, setSelectInput] = useState('consumo');
    const [cfopOutput, setCfopOutput] = useState(cfopInput);
    const [isShow, setIsShow] = useState(false);
    const onClick = () => {
        setIsShow(true)
        setCfopOutput(getCfopDescription(selectInput, cfopInput));
    }
    return (
        <div className='form-container'>
            <form>
                <h1>{isShow && cfopOutput}</h1>
                <div className='input-container'>
                    <label >Selecione o cfop</label>
                    <select value={cfopInput} onChange={(e) => setCfopInput(e.target.value)}>
                        {
                            cfop_compra.map(item => <option key={item.code} value={item.code}>{item.code}</option>)
                        }
                        <option value="5401">5401</option>
                        <option value="6401">6401</option>
                    </select>
                    <div className="underline"></div>
                    <select value={selectInput} onChange={(e) => setSelectInput(e.target.value)} >
                        <option value="consumo">UTILIZADOS PARA USO E CONSUMO</option>
                        <option value="industrialização">UTILIZADOS PARA INDUSTRIALIZAÇÃO</option>
                        <option value="revenda">UTILIZADOS PARA REVENDA</option>
                    </select>
                </div>
                <button type="button" onClick={onClick}>Converter</button>
            </form>
        </div>
    )
}



export default Form; 

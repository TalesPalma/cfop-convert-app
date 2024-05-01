import './Form.css'

const Form = () => {

    return (
        <div className='form-container'>
            <form>
                <div className='input-container'>
                    <label >Entre com o cfop:</label>
                    <input placeholder="Entre com o cfop" type="text" className="input" />
                    <div className="underline"></div>
                    <select>
                        <option value="cfop 1">UTILIZADOS PARA USO E CONSUMO</option>
                        <option value="cfop 2">UTILIZADOS PARA INDUSTRIALIZAÇÃO</option>
                    </select>
                </div>
                <button type="submit">Converter</button>
            </form>
        </div>
    )
}

export default Form

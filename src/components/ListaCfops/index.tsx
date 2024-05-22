import './ListaCfops.css'

const ListaCfops = () => {
    return (
        <div className='lista-cfops'>
            <table>
                <tbody>
                    <tr>
                        <td className="highlight">CFOP</td>
                        <td className="highlight">Descrição</td>
                    </tr>
                    <tr>
                        <td>5101</td>
                        <td>Venda de produção do estabelecimento</td>
                    </tr>
                    <tr>
                        <td>5102</td>
                        <td>Venda de mercadoria adquirida ou recebida de terceiros</td>
                    </tr>
                    <tr>
                        <td>5401</td>
                        <td>Venda de produção do estabelecimento quando o produto esteja sujeito a ST</td>
                    </tr>
                    <tr>
                        <td>5403</td>
                        <td>Venda de mercadoria, adquirida ou recebida de terceiros, sujeita a ST, na condição de contribuinte-substituto</td>
                    </tr>
                    <tr>
                        <td>5405</td>
                        <td>Venda de mercadoria, adquirida ou recebida de terceiros, sujeita a ST, na condição de contribuinte-substituído</td>
                    </tr>
                    <tr>
                        <td>6101</td>
                        <td>Venda de produção do estabelecimento</td>
                    </tr>
                    <tr>
                        <td>6102</td>
                        <td>Venda de mercadoria adquirida ou recebida de terceiros</td>
                    </tr>
                    <tr>
                        <td>6401</td>
                        <td>Venda de produção do estabelecimento quando o produto sujeito a ST</td>
                    </tr>
                    <tr>
                        <td>6403</td>
                        <td>Venda de mercadoria adquirida ou recebida de terceiros em operação com mercadoria sujeita a ST, na condição de contribuinte substituto</td>
                    </tr>
                    <tr>
                        <td>6404</td>
                        <td>Venda de mercadoria sujeita a ST, cujo imposto já tenha sido retido anteriormente</td>
                    </tr>
                    <tr>
                        <td>1407</td>
                        <td>Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária</td>
                    </tr>
                    <tr>
                        <td>2407</td>
                        <td>Compra de mercadoria para uso ou consumo cuja mercadoria está sujeita ao regime de substituição tributária</td>
                    </tr>
                    <tr>
                        <td>1556</td>
                        <td>Compra de material para uso ou consumo</td>
                    </tr>
                    <tr>
                        <td>2556</td>
                        <td>Compra de material para uso ou consumo</td>
                    </tr>
                    <tr>
                        <td>1101</td>
                        <td>Compra p/ industrialização ou produção rural</td>
                    </tr>
                    <tr>
                        <td>2101</td>
                        <td>Compra p/ industrialização ou produção rural</td>
                    </tr>
                    <tr>
                        <td>1102</td>
                        <td>Compra p/ comercialização</td>
                    </tr>
                    <tr>
                        <td>2102</td>
                        <td>Compra p/ comercialização</td>
                    </tr>
                    <tr>
                        <td>1403</td>
                        <td>Compra p/ comercialização em operação com mercadoria sujeita a ST</td>
                    </tr>
                    <tr>
                        <td>2403</td>
                        <td>Compra p/ comercialização em operação com mercadoria sujeita a ST</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export default ListaCfops;
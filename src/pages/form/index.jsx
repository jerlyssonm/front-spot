import api from '../../services/api';
import { useNavigate } from 'react-router';
import './index.css';


export function Form () {
    const navigate = useNavigate();
    const onSubmit =(e) => {
        e.preventDefault()
        const data = {
            name: e.target.elements.name.value,
            description: e.target.elements.description.value,
            localization: e.target.elements.localization.value,
            state: e.target.elements.state.value,
            city: e.target.elements.city.value,
        }
        console.log(data)
        api.post("/", data).then(_ => navigate("/"))
    }
    return(
        <form className="form" onSubmit={onSubmit}>
            <h3>Cadastrar Novo Ponto Turistico</h3>
            <br />
            <div>
                <label className='label'>Nome:</label>
                <input type="text" name="name" placeholder="Digite o nome do ponto turistico" />
            </div>
            <div className='localization'>
                <label className='label'>Localização:</label>
                <div>
                    <label >UF/Cidade:</label>
                    <div className='loc-input'>
                        <input name='state' list='ufs'type="text" className='uf'/>
                        <datalist id="ufs">
                            <option>SP</option>
                            <option>PI</option>
                            <option>MA</option>
                        </datalist>
                        <input type="text" name='city'/>
                    </div>
                </div>
            </div>
            <div>
                <label>Referência:</label>
                <input type="text" name="localization"/>
            </div>
            <div>
                <label className='label'>Descritivo:</label>
                <textarea name="description" rows={4} />
            </div>
            <div className='form-btn'>
                <button>Voltar</button>
                <input type="submit"/>
            </div>
        </form>
    )
}
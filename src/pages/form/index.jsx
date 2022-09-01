import './index.css'


export function Form () {
    return(
        <form className="form">
            <h3>Cadastrar Novo Ponto Turistico</h3>
            <br />
            <div>
                <label htmlFor="name"className='label'>Nome:</label>
                <input type="text" name="name" placeholder="Digite o nome do ponto turistico" />
            </div>
            <div className='localization'>
                <label className='label'>Localização:</label>
                <div>
                    <label htmlFor='uf'>UF/Cidade:</label>
                    <div className='loc-input'>
                        <input name='uf' list='ufs'type="text" className='uf'/>
                        <datalist id="ufs">
                            <option>SP</option>
                            <option>PI</option>
                            <option>MA</option>
                        </datalist>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div>
                <label>Referência:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor='description' className='label'>Descritivo:</label>
                <textarea name="description" rows={4} />
            </div>
            <div className='form-btn'>
                <button>Voltar</button>
                <button>Cadastrar</button>
            </div>
        </form>
    )
}
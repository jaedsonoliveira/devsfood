import React , {useState} from 'react';
import {Container,Logo, SearchInput} from './styled';


//identifica se busca está selecionada ou não
export default ({search, onSearch}) => {
    const [inputActive, setInputActive] = useState(search == '' ? false : true);

    const handleInputFocus = ()=>{
        setInputActive(true);   //abre o input
    }

    const handleInputBlur = ()=>{
        if(search == ''){   //inpede que input feche se estive preenchido
        setInputActive(false);  //fecha input
        }
    }

    const handleChange = (e)=>{
        onSearch(e.target.value);
    }
    return(
        <Container>
            <Logo src="assets/logo.png"/>
            <SearchInput
             type="text"
             placeholder="Digite um produto"
             value={search}
             onChange={handleChange}
             active={inputActive}
             onFocus={handleInputFocus}
             onBlur={handleInputBlur}
             />
        </Container>

    );
}
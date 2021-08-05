import React from 'react';

import {Container,ModalBody} from './styled';

export default ({status,setStatus,children})=>{

    const handleModalClick = (e)=>{
        if(e.target.classList.contains('modalBg')){     //não fecha modal ao clicar nele
            setStatus(false);
        }
    }
    return(
        <Container className="modalBg" status={status} onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>

    )
}
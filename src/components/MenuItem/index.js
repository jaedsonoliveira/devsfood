import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import {LinkArea,LinkIcon} from './styled';


//ao clicar em cada categoria redireciona para a pagina a partir do link
export default ({icon,link, title})=>{
    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname ==link; //identifica qual categoria ativa

    const handleLinkClick = (e)=>{
        e.preventDefault();
        history.push(link);
    }
    return (
        <LinkArea data-tip={title} data-for="tip-right" active={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon}/>
        </LinkArea>
    );
}
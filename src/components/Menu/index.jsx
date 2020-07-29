import React from 'react';
import Button from '../Button';
import Logo from '../../assets/imgs/atlasflix.png';

import './menu.css';

function Menu() {
    return (
      <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="AtlasFlix"/>
        </a>

        <Button as="a" href="/" className="ButtonLink">Novo Vídeo</Button>
      </nav>  
    );
}

export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    return (
        <HeaderArea >
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-title">V&NDA$</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/painel-controle">Painel de Controle</Link>
                                </li>
                                <li>
                                    <Link to="/minha-conta">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link to="/sair">Sair</Link>
                                </li>
                            </>
                        }
                        {!logged && 
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/cadastrar">Cadastrar</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;
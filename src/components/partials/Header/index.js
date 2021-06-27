import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

const Header = () => {
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
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/cadastrar">Cadastrar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;
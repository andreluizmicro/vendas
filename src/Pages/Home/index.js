import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Página Incial</h1>
            <Link to="/sobre">Sobre </Link>
        </div>
    );
}

export default Home;
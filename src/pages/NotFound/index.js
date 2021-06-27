import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const NotFound = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Oops, Página não encontrada."
                extra={<Link to="/"><Button type="primary">Voltar para Home</Button></Link>}
            />,
            
            
        </div>
    );
}

export default NotFound;
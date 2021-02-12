import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const Home: React.FC = () => {
    const history = useHistory();
    const [autenticado, setAutenticado] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setAutenticado(true);
    }

    return (
        <div data-testid="container">
            {!autenticado ? (
                <>
                    <h1>Pathname: {history.location.pathname}</h1>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Nome" />
                        <button type="submit">Enviar</button>
                    </form> 
                </>
            ): (
                <h1>Autenticado</h1>
            )}
            
            
        </div>
    )
};

export default Home;
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Home from '../../pages/Home';


// Criando um dado mock que servira para todos os testes desse arquivo
jest.mock('react-router-dom', () => {
    return {
        useHistory: () => ({
            location: {
                pathname: "/"
            }
        }), 
    }
})

describe('Home Page', () => {
    it('should be able to authenticated', () => {
        const {getByPlaceholderText, getByText, getByTestId} =  render(<Home />);

        const nomeField = getByPlaceholderText('Nome');
        const buttonElement = getByText('Enviar');
        
        fireEvent.change(nomeField, {target: { value: 'Victor' }});
        fireEvent.click(buttonElement)

        const mainContainer = getByTestId('container');

        expect(mainContainer).toHaveTextContent('Autenticado');
    });
});
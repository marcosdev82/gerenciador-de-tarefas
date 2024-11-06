import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createRoot } from "react-dom/client";
import '@testing-library/jest-dom';
import CadastrarTarefa from './cadastar-tarefa';

describe('Teste do componente de cadastrar tarefa', () => {
    
    it('deve rederizar o componente de cadastro de tarefas', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<CadastrarTarefa />);
    })

    it('deve cadastrar uma nova tarefa', () => {
        const { getByTestId } = render(<CadastrarTarefa />);
        
        // Simula a entrada de texto
        fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Testar componente' }});
        
        // Simula o clique no botão cadastrar
        fireEvent.click(getByTestId('btn-cadastrar'));
        
        // Verifica se o modal foi exibido com a mensagem de sucesso
        expect(getByTestId('modal')).toHaveTextContent('Sucesso');
        expect(getByTestId('modal')).toHaveTextContent('Tarefa adicionada com sucesso!');
    });
});

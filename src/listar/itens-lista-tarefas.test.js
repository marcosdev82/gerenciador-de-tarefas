import React from "react";
import { createRoot } from "react-dom/client";
import { ItensListaTarefas } from './itens-lista-tarefas';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tarefa from '../models/tarefa.model';

describe('Testes do componente que exibe um item da listagem de tarefas', () => {

    const nomeTarefa = 'Tarefa 1';
    const tarefa = new Tarefa(new Date().getTime(), nomeTarefa, false);

    it('Deve renderizar o componente corretamente', () => {
 
        const div = document.createElement('div');
        const root = createRoot(div);  
    
        // Renderizando o componente com props
        root.render(
            <ItensListaTarefas 
                tarefas={[]}
                recarregarTarefas={() => false}
            />
        );
    
        // Verificando se o componente foi renderizado
        // Exemplo básico: verificar se o componente renderizou sem erros, como por exemplo
        // verificando um texto que deve estar presente na renderização.
        expect(screen.getByText('Lista de Tarefas')).toBeInTheDocument();  // Ajuste conforme necessário
    });

    it('Deve exibir a tarefa', () => {

        render(
            <table>
                <tbody>
                    <ItensListaTarefas 
                        tarefas={[tarefa]}
                        recarregarTarefas={() => false}
                    /> 
                </tbody>
            </table>
        );

        const testTestId = screen.getByTestId('tarefa');
        expect(testTestId).toHaveTextContent(nomeTarefa);

    });
});
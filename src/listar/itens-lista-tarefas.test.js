import React from "react";
import { createRoot } from "react-dom/client";
import { ItensListaTarefas } from './itens-lista-tarefas';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tarefa from '../models/tarefa.model';

describe('Testes do componente que exibe um item da listagem de tarefas', () => {

    const nomeTarefa = 'Tarefa';
    const tarefa = new Tarefa(new Date().getTime(), nomeTarefa, false);
    const tarefaConcluida = new Tarefa(new Date().getTime(), nomeTarefa, true); 

    it('Deve renderizar o componente corretamente', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(
            <ItensListaTarefas 
                tarefas={[]}
                recarregarTarefas={() => false}
            />
        );
    });

    it('Deve exibir a tarefa', () => {

        render(
            <ItensListaTarefas  
                tarefas={[tarefa]}
                carregarTarefa={() => false}
            />
        );

        const tarefaElemento = screen.getByTestId('tarefa');
        expect(tarefaElemento).toHaveTextContent(nomeTarefa);
      
    });

    it('Deve exibir uma tarefa conluída!', () => {

        render(
            <ItensListaTarefas  
                tarefas={[tarefaConcluida]}
                carregarTarefa={() => false}
            />
        );

        const tarefaElemento = screen.getByTestId('none-tarefa');
        expect(tarefaElemento).toHaveTextContent(nomeTarefa);
      
    });

    
    

});
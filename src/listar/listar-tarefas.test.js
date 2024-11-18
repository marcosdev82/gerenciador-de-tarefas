import React from "react";
import { createRoot } from "react-dom/client";
import ListTarefas from "./listar-tarefas";
import Tarefa from '../models/tarefa.model';
import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Teste do componente de listagem de tarefas', () => {

    const primeiraTarefa = 'Primeira tarefa';
    const segundaTarefa = 'Segunda tarefa';
    const terceiraTarefa = 'Terceira tarefa';

    beforeEach(() => {
        localStorage['tarefas'] = JSON.stringify([
            new Tarefa(1, primeiraTarefa, false),
            new Tarefa(2, segundaTarefa, false),
            new Tarefa(3, terceiraTarefa, false)
        ]);
    });

    afterEach(() => {
        delete localStorage['tarefa']
    });

    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<ListTarefas />);
    });
});

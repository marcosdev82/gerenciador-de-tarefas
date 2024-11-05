import React from 'react';
import { createRoot } from "react-dom/client";
import CadastrarTarefas from './cadastar-tarefas';

describe('Teste do componente de cadastro de tarefa', () => {

    it('deve rederizar o componente de cadastro de tarefas', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<CadastrarTarefas />);
    })

})
import React from 'react';
import { createRoot } from "react-dom/client";
import CadastrarTarefa from './cadastar-tarefa';

describe('Teste do componente de cadastrar tarefa', () => {
    it('deve rederizar o componente de cadastro de tarefas', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<CadastrarTarefa />);
    })
})
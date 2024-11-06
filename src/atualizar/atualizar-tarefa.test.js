import React from 'react';
import { createRoot } from "react-dom/client";
import AtualizarTarefa from './autalizar-tarefa';

describe('Teste do componente de atualizar tarefa', () => {

    it('deve rederizar o componente de cadastro de tarefas', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<AtualizarTarefa id={1} />);
    })

})
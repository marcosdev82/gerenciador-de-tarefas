import React from "react";
import { createRoot } from "react-dom/client";
import ListTarefas from "./listar-tarefas";

describe('Teste do componente de listagem de tarefas', () => {
    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        const root = createRoot(div); 
        root.render(<ListTarefas />);
    });
});

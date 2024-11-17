import React from "react";
import { createRoot } from "react-dom/client";
import ConcluirTarefa from "./concluir-tarefa";
import Tarefa from "../models/tarefa.model";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/react';
import Ordenacao from "./ordenacao";

describe('Teste do componente de ornação', () => {

    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');

        const { unmount } = render(<Ordenacao 
            ordenarAsc={false}
            ordenarDesc={false}
        />, div)

        unmount(); // Desmonta o componente após o teste

    })

});
import React from 'react';
import ReactDOM from 'react-dom'; // Correção na importação do ReactDOM
import Paginacao from './paginacao';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Teste do componente de paginação', () => {
    it('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Paginacao
                totalItens={10}
                itemsPorPagina={10}
                paginaAtual={1}
                mudarPagina={() => false} />, div
        );
        ReactDOM.unmountComponentAtNode(div); // Correção no método de desmontagem
    });
});

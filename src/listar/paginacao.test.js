import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paginacao from './paginacao';

describe('Teste do componente de paginação', () => {
    it('Deve renderizar o componente sem erros', () => {
        const { unmount } = render(
            <Paginacao
                totalItens={10}
                itemsPorPagina={10}
                paginaAtual={1}
                mudarPagina={() => false}
            />
        );
        unmount(); // Desmonta o componente após o teste
    });
});

import React from "react";
import { render, screen } from '@testing-library/react';
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

    it('Deve exibir a ordernação padrão', () => {
      
        render(<Ordenacao 
            ordenarAsc={false}
            ordenarDesc={false}
        />)

        const faSort = screen.getByTestId('faSort')
        const faSortUp = screen.getByTestId('faSortUp')
        const faSortDown = screen.getByTestId('faSortDown')

        expect(faSort).not.toHaveClass('hidden')
        expect(faSortUp).toHaveClass('hidden')
        expect(faSortDown).toHaveClass('hidden')
    })
    


});
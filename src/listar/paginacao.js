import React from 'react';
import { Pagination } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

function Paginacao(props) {

    function gerarPrimeiroItem(){
        return (
            <Pagination.First
                key="pagFirt"
                onClick={() => props.paginaAtual === 1}
                disabled={props.paginaAtual === 1} />
        );
    }

    function obterPaginacao(){
        let items = [];
        items.push(gerarPrimeiroItem());
        return items;
    }

    return (
        <Pagination data-testid="paginacao">
            {obterPaginacao()}
        </Pagination>
    )

}

Paginacao.propTypes = {
    totalItens: PropTypes.number.isRequired,
    intensPorPagina: PropTypes.number.isRequired,
    paginaAtual: PropTypes.number.isRequired,
    mudarPagina: PropTypes.func.isRequired
}

export default Paginacao;
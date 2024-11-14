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

    function gerarItemAnterior(){
        return (
            <Pagination.Prev
                key="pagPrev"
                onClick={() => props.paginaAtual - 1}
                disabled={props.paginaAtual === 1} />
        )
    }

    function gerarItemNumerico(pagina){
        return (
            <Pagination.Item
                key={pagina}
                onClick={() => props.mudarPagina(props.paginaAtual - 1)}
                disabled={props.mudarPagina(pagina)} />
        )
    }

    function gerarProximoItem(){
        
    }

    function obterPaginacao(){
        const numPaginas = Math.ceil(props.totalitems / props.itemsPorPagina)
        let items = [];
        items.push(gerarPrimeiroItem());
        items.push(gerarItemAnterior());
        for (let pagina = 1; pagina <= numPaginas; pagina++){
            items.push(gerarItemNumerico(pagina))
        }
        items.push(gerarProximoItem());
        return items;
    }

    return (
        <Pagination data-testid="paginacao">
            {obterPaginacao()}
        </Pagination>
    )

}

Paginacao.propTypes = {
    totalitems: PropTypes.number.isRequired,
    itemsPorPagina: PropTypes.number.isRequired,
    paginaAtual: PropTypes.number.isRequired,
    mudarPagina: PropTypes.func.isRequired
}

export default Paginacao;
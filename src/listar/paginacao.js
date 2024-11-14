import React from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Paginacao(props) {

    return ()

}

Paginacao.PropTypes = {
    totalItens: PropTypes.number.isRequired,
    intensPorPagina: PropTypes.number.isRequired,
    paginaAtual: PropTypes.number.isRequired,
    mudarPagina: PropTypes.func.isRequired
}

export default Paginacao;
import React from "react";
import ListTarefas from "./listar-tarefas";
import PropTypes from "prop-types";

function ItensListaTarefas(props){
    return ;
}

ItensListaTarefas.prototype = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
}

export default ListTarefas;
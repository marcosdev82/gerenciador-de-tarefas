import React from "react";
import ListTarefas from "./listar-tarefas";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ItensListaTarefas(props){
    return ;
}

ItensListaTarefas.prototype = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
}

export default ListTarefas;
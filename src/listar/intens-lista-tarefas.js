import React from "react";
import ListTarefas from "./listar-tarefas";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ItensListaTarefas(props){

    function marcarConcluida(tarefa) {
        return tarefa.concluida ? 'line-trhought' : 'none';
    }

    return props.tarefas.map(tarefa => 
        <tr key={tarefa.id} data-testid="tarefa">
            <td width="75%" 
            data-testid="nome-tarefa"
            style={{textDecoration: marcarConcluida(tarefa)}}   
            >
                {tarefa.nome}
            </td>
            <td className="text-right">
                <link to={/atualizar/ + tarefa.id}
                    className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </link>
            </td>
        </tr>
    );
}

ItensListaTarefas.prototype = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
}

export default ListTarefas;
import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function RemoverTarefa(props) {
    return (
        <span>

        </span>
    );
}

RemoverTarefa.propTypes = {
    tarefa: PropTypes.object.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
}

export default RemoverTarefa;
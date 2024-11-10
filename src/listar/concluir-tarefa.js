import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

function ConcluirTarefa(props) {

    const [exibirModal, setExibirModal] = useState(false);

    return (
        <span className={props.className}>
            <Button className="btn-sm" onClick={handleAbirModal}
                data-testid="btn-abrir-modal">
                <FontAwesomeIcon  icon={faClipboardCheck} />
            </Button>
        </span>
    );

}

ConcluirTarefa.propTypes = {
    tarefa: PropTypes.object.isRequired,
    carregarTarefa: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
} 

export default ConcluirTarefa;

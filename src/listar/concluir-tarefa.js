import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

function ConcluirTarefa(props) {

    const [exibirModal, setExibirModal] = useState(false);

    function handleAbirModal(event) {
        event.preventDefault();
        setExibirModal(true);
    } 

    function handleFecharModal() {
        setExibirModal(false)
    }

    return (
        <span className={props.className}>
            <Button className="btn-sm" onClick={handleAbirModal}
                data-testid="btn-abrir-modal">
                <FontAwesomeIcon  icon={faClipboardCheck} />
            </Button>
            <Modal show={exibirModal} onHide={handleFecharModal}
                data-testid="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Concluir Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.body>
                    Deseja realemente concluir a seguinte tarefa?
                    <br />
                    <strong>{props.tarefa.nome}</strong>
                </Modal.body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleConcluirTarefa}
                        data-testid="concluir">
                            Sim
                    </Button>
                        <Button variant="light" onClick={handleFecharModal}
                        data-testid="concluir">
                            Não
                    </Button>
                </Modal.Footer>
            </Modal>
        </span>
    );

}

ConcluirTarefa.propTypes = {
    tarefa: PropTypes.object.isRequired,
    carregarTarefa: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
} 

export default ConcluirTarefa;

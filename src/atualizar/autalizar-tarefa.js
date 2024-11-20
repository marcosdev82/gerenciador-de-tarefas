import React, { useState } from "react";
import PropTypes from "prop-types";
import {Button, Form, Container, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

function AtualizarTarefa(props) {

    const navigate = useNavigate(); // Utilize o hook useNavigate

    const [exibirModal, setExibirModal] = useState(false);
    const [formValidado, setFormValidado] = useState(false);
    const [tarefa, setTarefa] = useState('');

    function voltar(event) {
        event.preventDefault();
        navigate('/');
    }

    function handleFecharModal(){
        navigate('/');
    }

    function atualizar(event){
        event.preventDefault();
    }

    function handleTxtTarefa(event){
        setTarefa(event.target.value)
    }

    return  (
        <Container>
            <h3 className="text-center">Atualizar</h3>
            <Container>
                <Form onSubmit={atualizar} noValidate validated={formValidado}>
                    <Form.Group>
                        <Form.Label>Trefa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a tarefa"
                            minLength="5"
                            maxLength="100"
                            required
                            data-testid="txt-tarefa"
                            value={tarefa} 
                            onChange={handleTxtTarefa}
                        />
                        <Form.Control.Feedback type="invalid">
                            A tarefa deve conter aomenos 5 caracteres.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button variant="success" type="sbmit" data-testid="btn-atualizar">
                            Atualizar
                        </Button>
                        &nbsp;
                        <Link className="btn btn-light my-1 mx-1" onClick={voltar}>Voltar</Link>
                    </Form.Group>
                </Form>
                <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tarefa Atuaizada com sucesso!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleFecharModal}>
                            Continuar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Container>
    );
}

export default AtualizarTarefa;
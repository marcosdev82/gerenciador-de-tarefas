import React from "react";
import PropTypes from "prop-types";
import {Button, Form, Container, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

function AtualizarTarefa(props) {

    const navigate = useNavigate(); // Utilize o hook useNavigate

    function voltar(event) {
        event.preventDefault();
        navigate('/');
    }

    return  (
        <Container>
            <h3 className="text-center">Atualizar</h3>
            <Container>
                <Form noValidate>
                    <Form.Group>
                        <Form.Label>Trefa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a tarefa"
                            minLength="5"
                            maxLength="100"
                            required
                            data-testid="txt-tarefa" />
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
            </Container>
        </Container>
    );
}

export default AtualizarTarefa;
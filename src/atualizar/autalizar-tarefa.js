import React from "react";
import PropTypes from "prop-types";
import {Button, Form, Container, Modal } from 'react-bootstrap';

function AtualizarTarefa(props) {
    return  (
        <div>
            <h3 className="text-center">Atualiza</h3>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label 
                            type="text"
                            placeholder="Digite a tarefa"
                            minLength="5"
                            maxLength="100"
                            required
                            data-testid="txt-tarefa"
                        />
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
                        A tarefa deve conter aomenos 5 caracteres.
                    </Form.Control.Feedback>
                </Form>
            </Container>
        </div>
    );
}

export default AtualizarTarefa;
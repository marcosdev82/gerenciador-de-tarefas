import React, { useState } from 'react';
import { Button, Form, Modal, Container, Card } from 'react-bootstrap';
import { Navigate, Link } from 'react-router-dom';

function CadastrarTarefa() {
    return (
        <Container className="my-5">
            <h3 className='text-center'>Cadastrar</h3>
            <Card className="p-5">
                <Card.Body> 
                    <Form>
                        <Form.Group>
                            <Form.Label>Tarefa</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Digite a tarefa'
                                minLength='5'
                                maxLength='100'
                                required 
                            />
                            <Form.Control.Feedback type="invalid">
                                A tarefa deve conter ao menos 5 caracteres.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="my-2 text-center">
                            <Button 
                                variant='success'
                                type='submit'>
                                Cadastrar
                            </Button>
                            
                            <Link to='/' className='btn btn-light'>
                                Voltar
                            </Link>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card> 
        </Container>
    );
}

export default CadastrarTarefa;

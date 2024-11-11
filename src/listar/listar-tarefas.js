import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListaTarefas from './itens-lista-tarefas';

function ListTarefas() {

    const [tarefas, setTarefas] = useState([])
    const [carregarTarefa, setCarregarTarefa] = useState(true)

    useEffect(() => {
        function obterTarefa() {
            const tarefasDb = localStorage['tarefas'];
            let ListTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
            setTarefas(ListTarefas);
        }

        if (carregarTarefa) {
            obterTarefa();
            setCarregarTarefa(false);
        }
    },[carregarTarefa]);


    return (
        <div className="text-center">
            <h3>Tarefas a fazer</h3>
            <Table striped bordered hover responsive data-testid="tabela">
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>
                            <Link 
                                to="/cadastrar" 
                                className="btn btn-success btn-small m-1"
                                data-testid="btn-nova-tarefa"
                            >
                                <FontAwesomeIcon icon={faPlus}/> Nova tarefa
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ItensListaTarefas  
                        tarefas={tarefas}
                        carregarTarefa={setCarregarTarefa}
                    />
                </tbody>
            </Table>
        </div>
    );
}

export default ListTarefas;
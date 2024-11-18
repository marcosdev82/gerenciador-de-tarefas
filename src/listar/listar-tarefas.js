import React, { useEffect, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListaTarefas from './itens-lista-tarefas';
import Paginacao from './paginacao';
import Ordenacao from './ordenacao';
import Tarefa from '../models/tarefa.model';

function ListTarefas() {
    const ITEMS_POR_PAGINA = 4;

    const [tarefas, setTarefas] = useState([]);
    const [carregarTarefa, setCarregarTarefas] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [ordenarAsc, setOrdenarAsc] = useState(false);
    const [ordenarDesc, setOrdenarDesc] = useState(false);
    const [filtroTarefa, setFiltroTarefa] = useState('');

    useEffect(() => {
        function obterTarefa() {
            const tarefasDb = localStorage['tarefas'];
            let listTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
            // filtrar 
            listTarefas = listTarefas.filter(
                t => t.nome.toLowerCase().indexOf(filtroTarefa.toLocaleLowerCase()) === 0
                // t => t.nome.toLowerCase().indexOf(filtroTarefa.toLocaleLowerCase()) >= 0
            );
            // ordenar
            if (ordenarAsc) {
                listTarefas.sort((t1, t2) => (t1.nome.toLowerCase() > t2.nome.toLowerCase() ? 1 : -1));
            } else if (ordenarDesc) {
                listTarefas.sort((t1, t2) => (t1.nome.toLowerCase() < t2.nome.toLowerCase() ? 1 : -1));
            }

            setTotalItems(listTarefas.length);
            setTarefas(listTarefas.slice((paginaAtual - 1) * ITEMS_POR_PAGINA, paginaAtual * ITEMS_POR_PAGINA));
        }

        if (carregarTarefa) {
            obterTarefa();
            setCarregarTarefas(false);
        }
    }, [carregarTarefa, paginaAtual, ordenarAsc, ordenarDesc]);

    function handleMudarPagina(pagina) {
        setPaginaAtual(pagina);
        setCarregarTarefas(true);
    }

    function handleOrdenar(event) {
        event.preventDefault();
        if (!ordenarAsc && !ordenarDesc) {
            setOrdenarAsc(true);
            setOrdenarDesc(false);
        } else if (ordenarAsc) {
            setOrdenarAsc(false);
            setOrdenarDesc(true);
        } else {
            setOrdenarAsc(false);
            setOrdenarDesc(false);
        }
        setCarregarTarefas(true);
    }

    function handleFiltrar(event) {
        setFiltroTarefa(event.target.value);
        setCarregarTarefas(true)
    }

    return (
        <div className="text-center">
            <h3>Tarefas a fazer</h3>
            <Table striped bordered hover responsive data-testid="tabela">
                <thead>
                    <tr>
                        <th>
                            <a  
                                href='/' 
                                onClick={handleOrdenar}>
                                    Tarefa
                                    &nbsp;
                                    <Ordenacao 
                                        ordenarAsc={ordenarAsc}
                                        ordenarDesc={ordenarDesc}
                                    />                 
                            </a>
                        </th>
                        <th>
                            <Link
                                to="/cadastrar"
                                className="btn btn-success btn-small m-1"
                                data-testid="btn-nova-tarefa"
                            >
                                <FontAwesomeIcon icon={faPlus} /> Nova tarefa
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <Form.Control
                                type="text"
                                value={filtroTarefa}
                                onChange={handleFiltrar}
                                data-testid="text-tarefa" 
                                className="filtro-tarefa"
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <ItensListaTarefas
                        tarefas={tarefas}
                        recarregarTarefas={setCarregarTarefas}
                    />
                </tbody>
            </Table>
            <Paginacao
                totalItems={totalItems}
                itemsPorPagina={ITEMS_POR_PAGINA}
                paginaAtual={paginaAtual}
                mudarPagina={handleMudarPagina}
            />
        </div>
    );
}

export default ListTarefas;

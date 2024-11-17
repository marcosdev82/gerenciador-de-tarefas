import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItensListaTarefas from './itens-lista-tarefas';
import Paginacao from './paginacao';

function ListTarefas() {
    const ITEMS_POR_PAGINA = 4;

    const [tarefas, setTarefas] = useState([]);
    const [carregarTarefa, setCarregarTarefas] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [ordenarAsc, setOrdenarAsc] = useState(false);
    const [ordenarDesc, setOrdenarDesc] = useState(false);

    useEffect(() => {
        function obterTarefa() {
            const tarefasDb = localStorage['tarefas'];
            let listTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
            setTotalItems(listTarefas.length);
            setTarefas(listTarefas.slice((paginaAtual - 1) * ITEMS_POR_PAGINA, paginaAtual * ITEMS_POR_PAGINA));
        }

        if (carregarTarefa) {
            obterTarefa();
            setCarregarTarefas(false);
        }
    }, [carregarTarefa, paginaAtual]);

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

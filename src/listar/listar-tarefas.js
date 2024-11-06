import React from "react";
import { Link } from 'react-router-dom';

function ListTarefas() {
    return (
        <Link to="/cadastrar" className="btn btn-success btn-small">
            Nova tarefa
        </Link>
    );
}

export default ListTarefas;

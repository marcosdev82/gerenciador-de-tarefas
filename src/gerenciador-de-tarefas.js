import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './gerenciador-de-tarefas.css';
import ListTarefas from './listar/listar-tarefas.js';
import CadastrarTarefas from './CadastrarTarefas';
import AtualizarTarefas from './AtualizarTarefas';

const routes = [
  { path: "/", element: <ListTarefas /> },
  { path: "/cadastrar", element: <CadastrarTarefas /> },
  { path: "/atualizar/:id", element: <AtualizarTarefas /> }
];

function GerenciadorDeTarefas() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default GerenciadorDeTarefas;

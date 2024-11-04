// index.js ou main.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa o react-dom com o createRoot
import GerenciadorDeTarefas from './gerenciador-de-tarefas';

it('Deve renderizar o projeto sem erros', () => {
   const div = document.createElement('div')
   ReactDOM.render(<GerenciadorDeTarefas />, div)
   ReactDOM.unMountComponentAtNote(div)
});

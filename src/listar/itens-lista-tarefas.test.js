import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ItensListaTarefas } from './itens-lista-tarefas';
import ConcluirTarefa from './concluir-tarefa';
import Tarefa from '../models/tarefa.model';

describe('Testes do componente que exibe um item da listagem de tarefas', () => {

  const nomeTarefa = 'Tarefa 1';
  const tarefa = new Tarefa(new Date().getTime(), nomeTarefa, false);

  it('Deve renderizar o componente corretamente', () => {
    render(
      <ItensListaTarefas 
        tarefas={[]}
        recarregarTarefas={() => {}}
      />
    );

    expect(screen.getByText('Lista de Tarefas')).toBeInTheDocument();
  });

  it('Deve exibir a tarefa', () => {
    render(
      <table>
        <tbody>
          <ItensListaTarefas 
            tarefas={[tarefa]}
            recarregarTarefas={() => {}}
          />
        </tbody>
      </table>
    );

    const testTestId = screen.getByTestId('tarefa');
    expect(testTestId).toHaveTextContent(nomeTarefa);
  });

  it('Deve concluir uma tarefa', () => {
    // Usando jest para mockar o localStorage
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    const tarefasMock = [tarefa];
    localStorage.setItem('tarefas', JSON.stringify(tarefasMock));

    render(
      <ConcluirTarefa
        tarefa={tarefa}
        recarregarTarefas={() => {}}
      />
    );

    // Simulando interações com o UI
    fireEvent.click(screen.getByTestId('btn-abrir-modal'));
    fireEvent.click(screen.getByTestId('btn-concluir'));

    // Verificando se o estado foi alterado no localStorage
    const tarefasDb = JSON.parse(localStorage.getItem('tarefas') || '[]');
    expect(tarefasDb[0].concluida).toBeTruthy();

    // Verificando se a função setItem foi chamada corretamente
    expect(setItemMock).toHaveBeenCalledWith('tarefas', JSON.stringify([{ ...tarefa, concluida: true }]));
  });

});

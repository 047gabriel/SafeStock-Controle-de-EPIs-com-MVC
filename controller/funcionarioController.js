import { Funcionario } from '../model/Funcionario.js';
import {
  cadastrarFuncionario as cadastrarFuncionarioRepository,
  listarFuncionarios as listarFuncionariosRepository,
  buscarFuncionarioPorIndice as buscarFuncionarioPorIndiceRepository,
  atualizarFuncionario as atualizarFuncionarioRepository,
  excluirFuncionario as excluirFuncionarioRepository,
} from '../repository/funcionarioRepository.js';

export function cadastrarFuncionario(matricula, nome, setor, cargo) {
  const funcionario = new Funcionario(matricula, nome, setor, cargo);
  cadastrarFuncionarioRepository(funcionario);
  return funcionario;
}

export function listarFuncionarios() {
  const funcionarios = listarFuncionariosRepository();

  if (funcionarios.length === 0) {
    console.log('Nenhum funcionário cadastrado.');
    return [];
  }

  for (let i = 0; i < funcionarios.length; i += 1) {
    const funcionario = funcionarios[i];
    console.log(
      `Índice ${i} | Matrícula: ${funcionario.matricula} | Nome: ${funcionario.nome} | Setor: ${funcionario.setor} | Cargo: ${funcionario.cargo} | Status: ${funcionario.status}`
    );
  }

  return funcionarios;
}

export function buscarFuncionarioPorIndice(indice) {
  const funcionario = buscarFuncionarioPorIndiceRepository(indice);

  if (!funcionario) {
    console.log(`Funcionário não encontrado no índice ${indice}.`);
    return null;
  }

  return funcionario;
}

export function atualizarFuncionario(indice, matricula, nome, setor, cargo) {
  if (!buscarFuncionarioPorIndiceRepository(indice)) {
    console.log(`Funcionário não encontrado no índice ${indice}.`);
    return null;
  }

  const funcionarioAtualizado = new Funcionario(matricula, nome, setor, cargo);
  const atualizado = atualizarFuncionarioRepository(indice, funcionarioAtualizado);

  if (!atualizado) {
    console.log(`Não foi possível atualizar o funcionário no índice ${indice}.`);
    return null;
  }

  return funcionarioAtualizado;
}

export function excluirFuncionario(indice) {
  if (!buscarFuncionarioPorIndiceRepository(indice)) {
    console.log(`Funcionário não encontrado no índice ${indice}.`);
    return false;
  }

  const excluido = excluirFuncionarioRepository(indice);

  if (!excluido) {
    console.log(`Não foi possível excluir o funcionário no índice ${indice}.`);
    return false;
  }

  return true;
}

export function ativarFuncionario(indice) {
  const funcionario = buscarFuncionarioPorIndiceRepository(indice);

  if (!funcionario) {
    console.log(`Funcionário não encontrado no índice ${indice}.`);
    return false;
  }

  funcionario.ativar();
  return true;
}

export function desativarFuncionario(indice) {
  const funcionario = buscarFuncionarioPorIndiceRepository(indice);

  if (!funcionario) {
    console.log(`Funcionário não encontrado no índice ${indice}.`);
    return false;
  }

  funcionario.desativar();
  return true;
}

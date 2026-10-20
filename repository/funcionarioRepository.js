const funcionarios = [];

export function cadastrarFuncionario(funcionario) {
  funcionarios.push(funcionario);
  return funcionario;
}

export function listarFuncionarios() {
  return funcionarios;
}

export function buscarFuncionarioPorIndice(indice) {
  return funcionarios[indice] ?? null;
}

export function atualizarFuncionario(indice, funcionario) {
  if (indice < 0 || indice >= funcionarios.length) {
    return false;
  }

  funcionarios[indice] = funcionario;
  return true;
}

export function excluirFuncionario(indice) {
  if (indice < 0 || indice >= funcionarios.length) {
    return false;
  }

  funcionarios.splice(indice, 1);
  return true;
}

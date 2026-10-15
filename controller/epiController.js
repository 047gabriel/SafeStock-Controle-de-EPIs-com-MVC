import Epi from '../model/Epi.js';
import {
  cadastrarEpi as cadastrarEpiRepository,
  listarEpis as listarEpisRepository,
  buscarEpiPorIndice as buscarEpiPorIndiceRepository,
  atualizarEpi as atualizarEpiRepository,
  excluirEpi as excluirEpiRepository,
} from '../repository/epiRepository.js';

export function cadastrarEpi(codigo, nome, numeroCA, quantidade) {
  const epi = new Epi(codigo, nome, numeroCA, quantidade);
  cadastrarEpiRepository(epi);
  return epi;
}

export function listarEpis() {
  const epis = listarEpisRepository();

  if (epis.length === 0) {
    console.log('Nenhum EPI cadastrado.');
    return [];
  }

  for (let i = 0; i < epis.length; i += 1) {
    const epi = epis[i];
    console.log(
      `Índice ${i} | Código: ${epi.codigo} | Nome: ${epi.nome} | CA: ${epi.numeroCA} | Quantidade: ${epi.quantidade}`
    );
  }

  return epis;
}

export function buscarEpiPorIndice(indice) {
  const epi = buscarEpiPorIndiceRepository(indice);

  if (!epi) {
    console.log(`EPI não encontrado no índice ${indice}.`);
    return null;
  }

  return epi;
}

export function atualizarEpi(indice, codigo, nome, numeroCA, quantidade) {
  const epiExistente = buscarEpiPorIndiceRepository(indice);

  if (!epiExistente) {
    console.log(`EPI não encontrado no índice ${indice}.`);
    return null;
  }

  const epiAtualizado = new Epi(codigo, nome, numeroCA, quantidade);
  const atualizado = atualizarEpiRepository(indice, epiAtualizado);

  if (!atualizado) {
    console.log(`Não foi possível atualizar o EPI no índice ${indice}.`);
    return null;
  }

  return epiAtualizado;
}

export function excluirEpi(indice) {
  if (!buscarEpiPorIndiceRepository(indice)) {
    console.log(`EPI não encontrado no índice ${indice}.`);
    return false;
  }

  const excluido = excluirEpiRepository(indice);

  if (!excluido) {
    console.log(`Não foi possível excluir o EPI no índice ${indice}.`);
    return false;
  }

  return true;
}

export function adicionarQuantidadeAoEstoque(indice, valor) {
  const epi = buscarEpiPorIndiceRepository(indice);

  if (!epi) {
    console.log(`EPI não encontrado no índice ${indice}.`);
    return false;
  }

  const adicionado = epi.adicionarQuantidade(valor);

  if (!adicionado) {
    console.log(`Não foi possível adicionar ${valor} unidades ao EPI do índice ${indice}.`);
    return false;
  }

  return true;
}

export function retirarQuantidadeDoEstoque(indice, valor) {
  const epi = buscarEpiPorIndiceRepository(indice);

  if (!epi) {
    console.log(`EPI não encontrado no índice ${indice}.`);
    return false;
  }

  const retirado = epi.retirarQuantidade(valor);

  if (!retirado) {
    console.log(`Não foi possível retirar ${valor} unidades do EPI do índice ${indice}.`);
    return false;
  }

  return true;
}

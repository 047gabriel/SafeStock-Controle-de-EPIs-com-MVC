import {
  cadastrarEpi,
  listarEpis,
  buscarEpiPorIndice,
  adicionarQuantidadeAoEstoque,
  retirarQuantidadeDoEstoque,
  atualizarEpi,
  excluirEpi,
} from './controller/epiController.js';

console.log('=== Cadastro de EPIs ===');
cadastrarEpi('EPI-001', 'Capacete', 'CA-100', 12);
cadastrarEpi('EPI-002', 'Óculos de proteção', 'CA-200', 8);
cadastrarEpi('EPI-003', 'Botina', 'CA-300', 15);

console.log('\n=== Listagem dos EPIs ===');
listarEpis();

console.log('\n=== Busca por índice ===');
console.log(buscarEpiPorIndice(1));

console.log('\n=== Adicionar quantidade ao estoque ===');
adicionarQuantidadeAoEstoque(1, 5);

console.log('\n=== Retirar quantidade do estoque ===');
retirarQuantidadeDoEstoque(1, 2);

console.log('\n=== Tentativa de retirada maior que o estoque ===');
retirarQuantidadeDoEstoque(1, 100);

console.log('\n=== Atualização de EPI ===');
atualizarEpi(0, 'EPI-001', 'Capacete reforçado', 'CA-150', 20);

console.log('\n=== Exclusão de EPI ===');
excluirEpi(2);

console.log('\n=== Listagem final ===');
listarEpis();

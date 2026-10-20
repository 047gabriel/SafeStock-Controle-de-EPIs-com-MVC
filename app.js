import {
  cadastrarEpi,
  listarEpis,
  buscarEpiPorIndice,
  adicionarQuantidadeAoEstoque,
  retirarQuantidadeDoEstoque,
  atualizarEpi,
  excluirEpi,
} from './controller/epiController.js';
import {
  cadastrarFuncionario,
  listarFuncionarios,
  buscarFuncionarioPorIndice,
  atualizarFuncionario,
  excluirFuncionario,
  ativarFuncionario,
  desativarFuncionario,
} from './controller/funcionarioController.js';

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

console.log('\n=== Cadastro de funcionários ===');
cadastrarFuncionario('MAT-001', 'Ana Silva', 'Produção', 'Operadora');
cadastrarFuncionario('MAT-002', 'Bruno Lima', 'Manutenção', 'Técnico');
cadastrarFuncionario('MAT-003', 'Carla Souza', 'Expedição', 'Supervisora');

console.log('\n=== Listagem dos funcionários ===');
listarFuncionarios();

console.log('\n=== Busca de funcionário por índice ===');
console.log(buscarFuncionarioPorIndice(1));

console.log('\n=== Desativação de funcionário ===');
desativarFuncionario(1);
console.log(`Status do funcionário no índice 1: ${buscarFuncionarioPorIndice(1)?.status}`);

console.log('\n=== Ativação de funcionário ===');
ativarFuncionario(1);
console.log(`Status do funcionário no índice 1: ${buscarFuncionarioPorIndice(1)?.status}`);

console.log('\n=== Atualização de funcionário ===');
atualizarFuncionario(0, 'MAT-001', 'Ana Silva Costa', 'Produção', 'Líder de equipe');

console.log('\n=== Exclusão de funcionário ===');
excluirFuncionario(2);

console.log('\n=== Listagem final dos funcionários ===');
listarFuncionarios();

# SafeStock

Sistema simples de cadastro de Equipamentos de Proteção Individual (EPIs) e funcionários desenvolvido em JavaScript, seguindo a separação de responsabilidades em camadas: Model, Repository e Controller.

## Objetivo

Manter o controle de EPIs disponíveis no almoxarifado, incluindo:

- cadastro de novos EPIs;
- listagem de todos os EPIs;
- busca por índice;
- atualização de dados;
- exclusão de registros;
- adição e retirada de unidades em estoque.
- cadastro, listagem, busca, atualização e exclusão de funcionários;
- ativação e desativação de funcionários.

## Estrutura do projeto

```text
safestock/
├── model/
│   ├── Epi.js
│   └── Funcionario.js
├── repository/
│   ├── epiRepository.js
│   └── funcionarioRepository.js
├── controller/
│   ├── epiController.js
│   └── funcionarioController.js
├── app.js
├── package.json
└── README.md
```

## Tecnologias

- JavaScript
- ES Modules (`type: "module"`)
- Node.js

## Requisitos

- Node.js instalado na máquina.

## Como executar

No diretório raiz do projeto, execute:

```bash
node app.js
```

## Comportamento da aplicação

Ao iniciar, o programa realiza os testes dos cadastros de EPIs e funcionários: cadastra, lista, busca, atualiza e exclui EPIs, testa operações de estoque, cadastra três funcionários, lista e busca por índice, desativa e ativa um funcionário, atualiza e exclui um registro e lista os funcionários restantes.

## Camadas

### Model
Arquivo: `model/Epi.js`

Representa o EPI e encapsula a quantidade em estoque com atributo privado e getter.

Arquivo: `model/Funcionario.js`

Representa o funcionário e encapsula seu status, consultado pelo getter e alterado pelos métodos `ativar()` e `desativar()`.

### Repository
Arquivo: `repository/epiRepository.js`

Armazena os objetos em um array e oferece funções para:

- cadastrar;
- listar;
- buscar por índice;
- atualizar;
- excluir.

### Controller
Arquivo: `controller/epiController.js`

Coordena a criação dos objetos, verifica a existência dos índices e chama as operações do Repository.

### Funcionários

O `repository/funcionarioRepository.js` mantém os funcionários em um array próprio, separado dos EPIs. O `controller/funcionarioController.js` cria os objetos da Model, valida os índices e coordena as operações de cadastro, listagem, busca, atualização, exclusão, ativação e desativação.

## Observações

- A quantidade do estoque é validada para evitar valores inválidos.
- A retirada de estoque nunca permite quantidade negativa ou maior que o disponível.
- Os dados ficam em memória durante a execução do programa, conforme solicitado.

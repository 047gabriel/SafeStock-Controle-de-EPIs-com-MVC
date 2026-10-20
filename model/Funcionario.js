export class Funcionario {
  #status;

  constructor(matricula, nome, setor, cargo) {
    this.matricula = matricula;
    this.nome = nome;
    this.setor = setor;
    this.cargo = cargo;
    this.#status = 'ativo';
  }

  get status() {
    return this.#status;
  }

  ativar() {
    this.#status = 'ativo';
  }

  desativar() {
    this.#status = 'inativo';
  }
}

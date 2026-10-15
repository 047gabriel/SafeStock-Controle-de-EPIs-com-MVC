class Epi {
  #quantidade;

  constructor(codigo, nome, numeroCA, quantidade) {
    this.codigo = codigo;
    this.nome = nome;
    this.numeroCA = numeroCA;
    this.#quantidade = quantidade;
  }

  get quantidade() {
    return this.#quantidade;
  }

  adicionarQuantidade(valor) {
    if (valor <= 0) {
      return false;
    }

    this.#quantidade += valor;
    return true;
  }

  retirarQuantidade(valor) {
    if (valor <= 0 || valor > this.#quantidade) {
      return false;
    }

    this.#quantidade -= valor;
    return true;
  }
}

export default Epi;

export default {
  state: () => ({
    dadosPageAtual: null,
    dadosCarrinho: null,
    variaveisPublicas: null
  }),
  mutations: {
    changeDadosPageAtual (state, payload) {
      state.dadosPageAtual = payload;
    },
    changeDadosCarrinho (state, payload) {
      state.dadosCarrinho = payload;
    },
    changeVariaveisPublicas (state, payload) {
      state.variaveisPublicas = payload;
    }
  }
}

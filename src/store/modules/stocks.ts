import { ActionTree } from "vuex";
import stocks from "@/data/stocks";
import { IStocksState, IStock, IOrder } from "@/types/stocks";

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state: IStocksState, stocks: IStock[]) {
    state.stocks = stocks;
  },
  RND_STOCKS(state: IStocksState) {}
};
const actions: ActionTree<IStocksState, {}> = {
  buyStock({ commit }, order: IOrder) {
    commit("BUY_STOCK", order);
  },
  initStocks({ commit }) {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks({ commit }) {
    commit("RND_STOCKS");
  }
};

const getters = {
  stocks(state: IStocksState) {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

import { ActionContext, ActionTree } from "vuex";
import stocks from "../../data/stocks";

const state = {
  stocks: []
};

export interface IStock {
  id: number;
  price: number;
  name: string;
}

interface IStocksState {
  stocks: IStock[];
}

interface IOrder {
  stockId: number;
  stockPrice: number;
  quantity: number;
}

const mutations = {
  SET_STOCKS(state: IStocksState, stocks: IStock[]) {
    state.stocks = stocks;
  },
  RND_STOCKS(state: IStocksState) {}
};
const actions: ActionTree<IStocksState, {}> = {
  buyStock({ commit }, order: IOrder) {},
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

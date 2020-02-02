import { IPortofolioState } from "@/types/portofolio";
import { IOrder } from "@/types/stocks";
import { IPurchasedState } from "../../types/portofolio";
import { ActionTree, GetterTree } from "vuex";
import { IStock } from "../../types/stocks";

const state: IPortofolioState = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state: IPortofolioState, order: IOrder) {
    const record = state.stocks.find(el => el.id == order.stockId);
    if (record) {
      record.quantity += order.quantity;
    } else {
      state.stocks.push({
        id: order.stockId,
        quantity: order.quantity
      });
    }
    state.funds -= order.stockPrice * order.quantity;
  },
  SELL_STOCK(state: IPortofolioState, order: IOrder) {
    const record = state.stocks.find(
      el => el.id == order.stockId
    ) as IPurchasedState;
    if (record.quantity > order.quantity) {
      record.quantity -= order.quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += order.stockPrice * order.quantity;
  }
};

const actions: ActionTree<IPortofolioState, {}> = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters: GetterTree<IPortofolioState, {}> = {
  stockPortofolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find((el: IStock) => el.id == stock.id);

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

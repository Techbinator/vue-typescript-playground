export interface IPurchasedState {
  id: number;
  quantity: number;
}

export interface IPortofolioState {
  funds: number;
  stocks: IPurchasedState[];
}

export interface IStockPortofolio {
  id: number;
  quantity: number;
  name: string;
  price: number;
}

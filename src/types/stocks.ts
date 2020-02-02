export interface IStock {
  id: number;
  price: number;
  name: string;
}

export interface IStocksState {
  stocks: IStock[];
}

export interface IOrder {
  stockId: number;
  stockPrice: number;
  quantity: number;
}

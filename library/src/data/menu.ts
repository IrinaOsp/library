export type TypeMenuItem = {
  name: string;
  price: number;
};
interface IMenu {
  'Coffee & Tea': TypeMenuItem[];
  'Desserts & Cakes': TypeMenuItem[];
}

export const MENU: IMenu = {
  'Coffee & Tea': [
    { name: 'Cold Brew Coffee', price: 3 },
    { name: 'French Press Pot', price: 5 },
    { name: 'Espresso', price: 2 },
    { name: 'Cappuccino', price: 4 },
    { name: 'Hot tea', price: 2 },
    { name: 'Cold tea', price: 2 },
  ],
  'Desserts & Cakes': [
    { name: 'Forest Gateau', price: 16 },
    { name: 'Blue Moon', price: 16 },
    { name: 'Truffle Cake', price: 15 },
    { name: 'Chocolate Cake', price: 18 },
    { name: 'Poet’s Dream Cake', price: 16 },
    { name: 'Pineapple Cake', price: 14 },
  ],
};

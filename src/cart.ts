import Buyable from './byable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  countTotal(): number {
    let sum = 0;
    for (let i = 0; i < this._items.length; i++) {
      sum += this._items[i].price;
    }
    return sum;
  }

  countTotalWithDiscount(discount: number): number {
    let sum = 0;
    for (let i = 0; i < this._items.length; i++) {
      sum += this._items[i].price * (1 - discount / 100);
    }
    return sum;
  }

  deleteItem(id: number): void {
    for (let i = 0; i < this._items.length; i++) {
      if (this._items[i].id === id) {
        this._items.splice(i, 1);
      }
    }
  }
}

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
    return this._items.reduce((sum, item) => sum + item.price, 0);
  }

  countTotalWithDiscount(discount: number): number {
    return this.countTotal() * (1 - discount / 100);
  }

  deleteItem(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }
}

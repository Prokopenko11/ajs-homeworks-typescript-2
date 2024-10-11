import Buyable from './byable';

export default class Book implements Buyable {
  constructor(
    readonly id: number, 
    readonly name: string, 
    readonly price: number,
    readonly author: string,
  ) {}
}
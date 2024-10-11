import Cart from '../cart';
import Book from '../book';

const cart = new Cart;
const book1 = new Book(1, 'The Captain’s Daughter', 1000, 'Alexander Pushkin');
const book2 = new Book(2, 'Dead Souls', 1500, 'Nikolai Gogol');
const book3 = new Book(3, 'The Master and Margarita', 1300, 'Mikhail Bulgakov');

cart.add(book1);
cart.add(book2);
cart.add(book3);

test('testing countTotal method', () => {
  const result = cart.countTotal();
  expect(result).toBe(3800);
});

test('testing countTotalWithDiscount method', () => {
  const result = cart.countTotalWithDiscount(10);
  expect(result).toBe(3420);
});

test('testing deleteItem method', () => {
  cart.deleteItem(2);
  const result = cart.items;
  expect(result).toEqual([book1, book3]);
});

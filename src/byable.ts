export default interface Buyable {
  id: number,
  name: string,
  price: number,
  author?: string,
  discount?: number
}
import { Product } from "../product";
import CartItem from "./cartItem";

export default class Cart {
  constructor(readonly items: CartItem[] = []) {}

  addItem(product: Product): Cart {
    const item = this.itemByProduct(product);
    if (item) {
      return new Cart(this.changeQuantityItem(this.items, product, 1));
    } else {
      return new Cart([...this.items, { product, quantity: 1 }]);
    }
  }

  removeItem(product: Product) {
    const item = this.itemByProduct(product);
    if (!item) return this;

    return new Cart(this.changeQuantityItem(this.items, product, -1));
  }

  removeProduct(product: Product) {
    const item = this.itemByProduct(product);
    if (!item) return this;

    return new Cart(
      this.items.filter((item) => item.product.id !== product.id)
    );
  }

  clean() {
    return new Cart();
  }

  get quantityItems() {
    return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }

  get totalValue() {
    return this.items
      .map((item) => item.product.sale_price * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  get valueTotalFull() {
    return this.items
      .map((item) => item.product.base_price * item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  private itemByProduct(product: Product): CartItem | undefined {
    return this.items.find((item) => item.product.id === product.id);
  }

  private changeQuantityItem(
    items: CartItem[],
    product: Product,
    difference: number
  ): CartItem[] {
    return items
      .map((i) =>
        i.product.id === product.id
          ? { ...i, quatity: i.quantity + difference }
          : i
      )
      .filter((i) => i.quantity > 0);
  }
}

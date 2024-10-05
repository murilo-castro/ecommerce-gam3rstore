import Product from "./product";

export default class FilterProduct {
  execute(search: string, product: Product[]): Product[] {
    const words = search.toLowerCase().split(" ");
    return product.filter((product) => {
      const texto = `
                ${product.name}
                ${product.description}
                ${Object.values(product.specification).join(" ")}
                ${product.brand}
            `.toLowerCase();
      return words.every((palavra) => texto.includes(palavra));
    });
  }
}

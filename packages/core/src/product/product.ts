import Priceable from "./priceable";
import Specification from "./specifications";

export default interface Product extends Priceable {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  score: number;
  review: string;
  tags: string[];
  specification: Specification;
}

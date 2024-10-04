import { Status } from "./Status";
import { PaymentMethod } from "./PaymentMethod";
import OrderDelivery from "./ OrderDelivery";
import OrderItem from "./OrderItem";

export default interface Order {
  id: number;
  date: Date;
  items: OrderItem[];
  total_value: number;
  status: Status;
  payment_method: PaymentMethod;
  delivery: OrderDelivery;
}

interface Specification {
    emphasis: string;
    [key_atribute: string]: string | number | boolean;
}

interface Priceable {
    base_price: number;
    sale_price: number;
    lowest_price: number;
    highest_price: number;
    average_price: number;
}

interface Product extends Priceable {
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

interface CartItem {
    product: Product;
    quantity: number;
}

declare class Cart {
    readonly items: CartItem[];
    constructor(items?: CartItem[]);
    addItem(product: Product): Cart;
    removeItem(product: Product): Cart;
    removeProduct(product: Product): Cart;
    clean(): Cart;
    get quantityItems(): number;
    get totalValue(): number;
    get valueTotalFull(): number;
    private itemByProduct;
    private changeQuantityItem;
}

declare const products: Product[];

declare const MAX_NUMBER_INSTALLMENTS = 12;
declare const MONTHLY_INTEREST_RATE = 0.0167;

interface Installment {
    total_value: number;
    installment_value: number;
    number_of_Installments: number;
    interest_rate: number;
}

declare class Calculateinstallment {
    execute(value: number, numberOfInstallments?: number, interestRate?: number): Installment;
    private calculateCompoundInterest;
    private withTwoDecimal;
}

declare enum Status {
    RECEIVED = "RECEBIDO"
}

declare enum PaymentMethod {
    PIX = "PIX",
    TICKET = "BOLETO",
    CARD = "CARTAO"
}

interface OrderDelivery {
    id: number;
    name: string;
    email: string;
    cpf: string;
    strete: string;
    complement: string;
    city: string;
    state: string;
}

interface OrderItem {
    id: number;
    product: Product;
    quantity: number;
    unit_price: number;
}

interface Order {
    id: number;
    date: Date;
    items: OrderItem[];
    total_value: number;
    status: Status;
    payment_method: PaymentMethod;
    delivery: OrderDelivery;
}

declare class Coin {
    static format(value: number, location?: string, coin?: string): string;
}

export { Calculateinstallment, Cart, type CartItem, Coin, type Installment, MAX_NUMBER_INSTALLMENTS, MONTHLY_INTEREST_RATE, type Order, type OrderDelivery, type OrderItem, PaymentMethod, type Priceable, type Product, type Specification, Status, products };

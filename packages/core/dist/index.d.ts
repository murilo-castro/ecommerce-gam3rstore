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

declare class Coin {
    static format(value: number, location?: string, coin?: string): string;
}

export { Calculateinstallment, Coin, type Installment, MAX_NUMBER_INSTALLMENTS, MONTHLY_INTEREST_RATE, type Priceable, type Product, type Specification, products };

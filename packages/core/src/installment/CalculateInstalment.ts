import {
  MAX_NUMBER_INSTALLMENTS,
  MONTHLY_INTEREST_RATE,
} from "../constants/index";
import Installment from "./installment";

export default class Calculateinstallment {
  execute(
    value: number,
    numberOfInstallments: number = MAX_NUMBER_INSTALLMENTS,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment {
    if (
      numberOfInstallments < 2 ||
      numberOfInstallments > MAX_NUMBER_INSTALLMENTS
    ) {
      throw new Error(
        `Quantidade máxima de parcelas deve ser ${MAX_NUMBER_INSTALLMENTS} `
      );
    }

    const totalValue = this.calculateCompoundInterest(
      value,
      interestRate,
      numberOfInstallments
    );

    return {
      installment_value: this.withTwoDecimal(totalValue / numberOfInstallments),
      total_value: this.withTwoDecimal(totalValue),
      number_of_Installments: numberOfInstallments,
      interest_rate: interestRate,
    };
  }

  private calculateCompoundInterest(
    value: number,
    interestRate: number,
    numberOfInstallments: number
  ) {
    return value * Math.pow(1 + interestRate, numberOfInstallments);
  }

  private withTwoDecimal(value: number): number {
    return Math.round(value * 100) / 100;
  }
}

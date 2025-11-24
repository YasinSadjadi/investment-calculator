import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type InvestmentData } from './investmentData.model';
import { InvestmentResultComponent } from './investment-result/investment-result.component';

@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [InvestmentResultComponent, FormsModule],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css',
})
export class InvestmentCalculatorComponent {
  investmentData = signal<InvestmentData>({
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
    initialInvestment: 0,
  });

  enteredDuration = 0;
  enteredExpectedReturn = 0;
  enteredAnnualInvestment = 0;
  enteredInitialInvestment = 0;

  show = false;

  onSubmit() {
    this.show = true;
    this.investmentData.set({
      annualInvestment: this.enteredAnnualInvestment,
      duration: this.enteredDuration,
      expectedReturn: this.enteredExpectedReturn,
      initialInvestment: this.enteredInitialInvestment,
    });
  }
}

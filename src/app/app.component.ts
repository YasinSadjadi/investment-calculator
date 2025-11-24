import { Component } from '@angular/core';
import { HeaderComponent } from './header/header/header.component';
import { InvestmentCalculatorComponent } from './investment/investment-calculator.component';
import { InvestmentResultComponent } from './investment/investment-result/investment-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentCalculatorComponent],
})
export class AppComponent {}

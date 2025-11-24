import { Component, computed, inject, input } from '@angular/core';
import { InvestmentData } from '../investmentData.model';
import { InvestmentResultService } from './investment-results.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentResultService = inject(InvestmentResultService);

  investmentData = input.required<InvestmentData | undefined>();

  investmentResults = computed(() => {
    const data = this.investmentData();

    if (data !== undefined) {
      return this.investmentResultService.calculateInvestmentResults(data);
    }

    return undefined;
  });
}

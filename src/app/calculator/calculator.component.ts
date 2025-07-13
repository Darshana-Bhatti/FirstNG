import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
currentInput: string = '';
  previousInput: string = '';
  operator: string | null = null;

  appendNumber(num: string): void {
    if (num === '.' && this.currentInput.includes('.')) return;
    this.currentInput += num;
  }

  chooseOperator(op: string): void {
    if (this.currentInput === '') return;
    if (this.previousInput !== '') {
      this.calculate();
    }
    this.operator = op;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  calculate(): void {
    const a = parseFloat(this.previousInput);
    const b = parseFloat(this.currentInput);
    if (isNaN(a) || isNaN(b)) return;

    let result: number | string;
    switch (this.operator) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b !== 0 ? a / b : 'Error'; break;
      case '%': result = a % b; break;
      default: return;
    }

    this.currentInput = result.toString();
    this.previousInput = '';
    this.operator = null;
  }

  clear(): void {
    this.currentInput = '';
    this.previousInput = '';
    this.operator = null;
  }

  delete(): void {
    this.currentInput = this.currentInput.slice(0, -1);
  }
}

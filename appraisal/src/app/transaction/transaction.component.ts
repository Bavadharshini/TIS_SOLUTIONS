import { Component } from '@angular/core';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  fullStackExpenseQ1: Transaction[] = [];
  fullStackExpenseQ2: Transaction[] = [];
  
  fullStackExpenseQ3: Transaction[] = [];
  fullStackExpenseQ4: Transaction[] = [];

  SAPExpenseQ1: Transaction[] = [];
  SAPExpenseQ2: Transaction[] = [];
  SAPExpenseQ3: Transaction[] = [];
  SAPExpenseQ4: Transaction[] = [];

  SalesforceExpenseQ1: Transaction[] = [];
  SalesforceExpenseQ2: Transaction[] = [];
  SalesforceExpenseQ3: Transaction[] = [];
  SalesforceExpenseQ4: Transaction[] = [];

  financeExpenseQ1: Transaction[] = [];
  financeExpenseQ2: Transaction[] = [];
  financeExpenseQ3: Transaction[] = [];
  financeExpenseQ4: Transaction[] = [];








 
}

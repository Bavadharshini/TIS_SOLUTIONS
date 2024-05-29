import { Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'transaction', component:TransactionComponent},
    {path:'',component:DashboardComponent},
];

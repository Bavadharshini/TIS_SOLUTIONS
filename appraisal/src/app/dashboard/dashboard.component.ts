import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  employeeSelected: Employee | null = null;
  selectedEmployee = false;
  title = 'appraisal';
  highRatingEmployeesFull: Employee[] = [];
  highRatingEmployeesSAP: Employee[] = [];
  highRatingEmployeesSales: Employee[] = [];
  highRatingEmployeesFin: Employee[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.highRatingEmployeesFull =
      this.employeeService.getHighRatingEmployeesByRatings('Full stack');
    this.highRatingEmployeesSAP =
      this.employeeService.getHighRatingEmployeesByRatings('SAP');
    this.highRatingEmployeesSales =
      this.employeeService.getHighRatingEmployeesByRatings('Salesforce');
    this.highRatingEmployeesFin =
      this.employeeService.getHighRatingEmployeesByRatings('Finance');
  }

  showEmployeeDetails(employee: Employee): void {
    this.employeeSelected = employee;
    this.selectedEmployee = true;
    this.openPopup();
  }

  openPopup(): void {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'block';
    }
  }

  closePopup(): void {
    const popup = document.getElementById('popup');
    this.selectedEmployee = false;
    if (popup) {
      popup.style.display = 'none';
    }
  }
}

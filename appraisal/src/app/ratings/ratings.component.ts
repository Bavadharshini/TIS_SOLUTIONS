import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css'
})
export class RatingsComponent {
  maxRevenueEmp:Employee[] = [];
  currentManagerName:string="";
  clicked = false;
  submitted =  false;
  model2 = new Employee('','','','',0,'','',1,1)
  constructor(private employeeService:EmployeeService,private userService:UserService){};

  getData(){
    this.currentManagerName = this.userService.getManagerName();
    console.log(this.currentManagerName);
    this.clicked = true;
    this.maxRevenueEmp = this.employeeService.getMaximumTransactionedEmployee(this.currentManagerName);
    
  }

  onSubmit(){
    this.submitted = true;
    this.employeeService.setEmployeeAppraisalData(this.model2.id,this.model2.rating,this.model2.feedback,this.model2.skillsToImprove);
    alert("Appraisal Added successfully");

  }

}

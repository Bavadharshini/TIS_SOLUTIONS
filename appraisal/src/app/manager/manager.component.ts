import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  submitted = false;
  model = new User('','','');
  
  constructor(private service:UserService, private router:Router){}
  onSubmit(){
    if(this.service.getValidation(this.model.empId,this.model.password)){
      this.submitted = true;
      this.router.navigate(['/manager']);
    }
    
  }

}

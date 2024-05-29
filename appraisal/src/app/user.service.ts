import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentManagerName:string = "";
  private managers: User[] = [
    new User('101', 'Bob', 'passwordBob123'),
    new User('102', 'Alice', 'passwordAlice123'),
    new User('103', 'Emma', 'passwordEmma123'),
    new User('104', 'Daniel', 'passwordDaniel123'),
    new User('105', 'John', 'passwordJohn123'),
  ];
  constructor() { }

  getValidation(id:string,password:string):boolean{

    const validation = this.managers.filter(employee => employee.empId === id && employee.password === password);
   
    if(validation.length !=0){
      this.currentManagerName = validation[0].name;
      console.log(this.currentManagerName)
      return true;
    }
    else{
      return false;
    }
  }

  getManagerName(){
    console.log(this.currentManagerName)
    return this.currentManagerName;
  }

}

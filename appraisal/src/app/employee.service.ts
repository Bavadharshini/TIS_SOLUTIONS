import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [
    // Full stack department
    new Employee('1', 'Alice', 'Full stack', 'Bob', 4.5, 'Excellent performance', 'Angular'),
    new Employee('2', 'John', 'Full stack', 'Bob', 3.8, 'Good performance', 'React'),
    new Employee('3', 'Mike', 'Full stack', 'Bob', 4.2, 'Very good performance', 'Node.js'),
    new Employee('4', 'Sara', 'Full stack', 'Alice', 4.0, 'Good performance', 'TypeScript'),
    new Employee('5', 'Tom', 'Full stack', 'Alice', 4.6, 'Excellent performance', 'JavaScript'),
    new Employee('6', 'Lilly', 'Full stack', 'Alice', 3.9, 'Good performance', 'CSS'),
    new Employee('7', 'Sam', 'Full stack', 'Bob', 4.1, 'Very good performance', 'HTML'),
    new Employee('8', 'Rose', 'Full stack', 'Bob', 4.3, 'Very good performance', 'Express.js'),
    new Employee('9', 'Chris', 'Full stack', 'Alice', 4.4, 'Very good performance', 'MongoDB'),
    new Employee('10', 'Nina', 'Full stack', 'Alice', 3.7, 'Good performance', 'Webpack'),

    // SAP department
    new Employee('11', 'Daniel', 'SAP', 'Emma', 4.5, 'Excellent performance', 'ABAP'),
    new Employee('12', 'Laura', 'SAP', 'Emma', 3.8, 'Good performance', 'SAP Fiori'),
    new Employee('13', 'James', 'SAP', 'Emma', 4.2, 'Very good performance', 'SAP HANA'),
    new Employee('14', 'Sophia', 'SAP', 'Daniel', 4.0, 'Good performance', 'SAP Basis'),
    new Employee('15', 'Robert', 'SAP', 'Daniel', 4.6, 'Excellent performance', 'SAP S/4HANA'),
    new Employee('16', 'Maria', 'SAP', 'Daniel', 3.9, 'Good performance', 'SAP UI5'),
    new Employee('17', 'David', 'SAP', 'Emma', 4.1, 'Very good performance', 'SAP BW'),
    new Employee('18', 'Olivia', 'SAP', 'Emma', 4.3, 'Very good performance', 'SAP CRM'),
    new Employee('19', 'Peter', 'SAP', 'Daniel', 4.4, 'Very good performance', 'SAP SCM'),
    new Employee('20', 'Linda', 'SAP', 'Daniel', 3.7, 'Good performance', 'SAP MM'),

    // Salesforce department
    new Employee('21', 'Paul', 'Salesforce', 'John', 4.5, 'Excellent performance', 'Apex'),
    new Employee('22', 'Emily', 'Salesforce', 'John', 4.7, 'Good performance', 'Visualforce'),
    new Employee('23', 'George', 'Salesforce', 'John', 4.2, 'Very good performance', 'Salesforce Lightning'),
    new Employee('24', 'Anna', 'Salesforce', 'Paul', 4.0, 'Good performance', 'SOQL'),
    new Employee('25', 'Henry', 'Salesforce', 'Paul', 4.6, 'Excellent performance', 'Salesforce Integration'),
    new Employee('26', 'Grace', 'Salesforce', 'Paul', 3.9, 'Good performance', 'Salesforce Administration'),
    new Employee('27', 'Edward', 'Salesforce', 'John', 4.1, 'Very good performance', 'Salesforce Marketing Cloud'),
    new Employee('28', 'Eva', 'Salesforce', 'John', 4.3, 'Very good performance', 'Salesforce Service Cloud'),
    new Employee('29', 'Kevin', 'Salesforce', 'Paul', 4.4, 'Very good performance', 'Salesforce Community Cloud'),
    new Employee('30', 'Laura', 'Salesforce', 'Paul', 3.7, 'Good performance', 'Salesforce Einstein'),
    
    //finance
    new Employee('31', 'David', 'Finance', 'Alice', 4.5, 'Excellent performance', 'Financial Analysis'),
    new Employee('32', 'Susan', 'Finance', 'Alice', 3.8, 'Good performance', 'Budgeting'),
    new Employee('33', 'John', 'Finance', 'Bob', 4.2, 'Very good performance', 'Risk Management'),
    new Employee('34', 'Betty', 'Finance', 'Bob', 4.0, 'Good performance', 'Auditing'),
    new Employee('35', 'Charles', 'Finance', 'Alice', 4.6, 'Excellent performance', 'Tax Planning'),
    new Employee('36', 'Diana', 'Finance', 'Alice', 3.9, 'Good performance', 'Financial Reporting'),
    new Employee('37', 'Edward', 'Finance', 'Bob', 4.1, 'Very good performance', 'Investment Strategies'),
    new Employee('38', 'Fiona', 'Finance', 'Bob', 4.3, 'Very good performance', 'Cost Control'),
    new Employee('39', 'George', 'Finance', 'Alice', 4.4, 'Very good performance', 'Cash Flow Management'),
    new Employee('40', 'Helen', 'Finance', 'Bob', 3.7, 'Good performance', 'Financial Modeling')
  ];


  constructor() { }

  getHighRatingEmployeesByRatings(department :string): Employee[] {
    return this.employees.filter(employee =>employee.department === department && employee.rating > 4.5);
  }



}

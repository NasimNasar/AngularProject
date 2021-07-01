import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  constructor(private service:SharedService) { }

  Employees:any=[];
  EmployeeId:string;
  EmployeeName:string;
  Department:string;
  Salary: string;

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  refreshEmployeeList(){
    this.service.getEmpList().subscribe(data=>{
      this.Employees=data;
    })
  }

  onOptionsSelected(event){
    const Id = event.target.value;

    if(Id != "-1"){
      this.service.getSalaryEmpList(Id).subscribe(data=>{
        this.EmployeeId = data[0].EmployeeId;
        this.EmployeeName = data[0].EmployeeName;
        this.Department = data[0].Department;
        this.Salary = data[0].Salary;
      })
    }
    else{
      this.EmployeeId = "0";
      this.EmployeeName = "";
      this.Department = "";
      this.Salary = "";
    }
  }

  updateSalary(){
    if(this.EmployeeId == "-1"){
      return false;
    }
    var val = {
      EmployeeId: this.EmployeeId,
      Salary: this.Salary
    };

    this.service.updateSalary(val).subscribe(data=>{
      alert(data.toString());
    })

  }
  

}

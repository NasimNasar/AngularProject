import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmployeeList:any=[];
  EmployeeListSearch:any=[];

  Searchoptions: any[] = ["EmployeeId", "EmployeeName", "Department"];
  selectedQuantity:string = "EmployeeId";
  SearchValue: string = "";

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:""
    };
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteEmployee(item).subscribe(data=>{
        alert(data.toString());
        this.refreshEmployeeList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmployeeList();
  }

  refreshEmployeeList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.EmployeeListSearch=data;
    })
  }

  getSearchData() {
    var FindKey = this.selectedQuantity;
    var FindValue = this.SearchValue;

    this.EmployeeList = this.EmployeeListSearch.filter(function (el) {
      if (FindKey == "EmployeeId") {
        return el.EmployeeId.toString().toLowerCase().includes(
          FindValue.toString().trim().toLowerCase()
        )
      }
      else if (FindKey == "EmployeeName") {
        return el.EmployeeName.toString().toLowerCase().includes(
          FindValue.toString().trim().toLowerCase()
        )
      }
      else if (FindKey == "Department") {
        return el.Department.toString().toLowerCase().includes(
          FindValue.toString().trim().toLowerCase()
        )
      }
      else {
        
      }
    });
  }

}

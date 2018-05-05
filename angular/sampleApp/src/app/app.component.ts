import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  studentList : Array<Student> = [
    {studentName:"john",rollNumber:1,isGeneral:true},
    {studentName:"Smit",rollNumber:2,isGeneral:true},
    {studentName:"albert",rollNumber:3,isGeneral:false},
    {studentName:"hamid",rollNumber:3,isGeneral:true}
  ]
  // deleteAllStudent(){
  //
  // }
}

class Student{
  studentName : string;
  rollNumber : number;
  isGeneral : boolean;
}

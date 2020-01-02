import { Component,OnChanges } from '@angular/core';
import { Student } from './models';
import {Course} from './models'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  studentSelected_StudentList:Student;
  ListOFcourses_StudentInfo:string[]
  constructor() {

  }
  function_studentSelectedEmit(studentSelectedOnStudentList:Student):void{

    //  alert(message);
   this.studentSelected_StudentList=studentSelectedOnStudentList;
  }

  function_ListOfCoursesIdsEmit(ListOfCoursesStudentInfo:string[]){
   
    this.ListOFcourses_StudentInfo=ListOfCoursesStudentInfo;
  }

}

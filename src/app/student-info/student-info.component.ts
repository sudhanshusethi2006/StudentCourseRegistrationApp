import { Component,OnInit, Input, OnChanges,Output,EventEmitter } from '@angular/core';
import {StudentService} from '../services/student.service';

import { Student } from '../models';
import { Course } from '../models';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})


export class StudentInfoComponent implements OnChanges {


  studentNumber:number;
  firstName:string;
  lastName:string;
  email:string;
  registrationDate:Date
  ListOfCoursesIds:string[]
  // ListOFCourses:Course
  @Output() ListOfCoursesIdsEmit:  EventEmitter<string[]> = new EventEmitter<string[]>();
 @Input() studentSelected: Student;

  constructor(private _studentService : StudentService) {
    
   }


   ngOnChanges():void{
    
    //this._studentService.newStudentSelected.subscribe(studentSelected=>studentSelected)
    this.studentNumber=this.studentSelected.studentNumber;
    this.firstName=this.studentSelected.firstName;
    this.lastName=this.studentSelected.lastName;
    this.registrationDate=this.studentSelected.registrationDate;
    this.email=this.studentSelected.email;


    this._studentService.getCourseIdsForStudent(this.email).subscribe(ListOfCoursesIds=>this.ListOfCoursesIds=ListOfCoursesIds);
   
    this.ListOfCoursesIdsEmit.emit(this.ListOfCoursesIds);
      //  this._studentService.getCourse(this.ListOfCoursesIds[0]).subscribe(ListOfCourses=>this.ListOFCourses=ListOfCourses);

      //  alert(this.ListOFCourses.name);

  }




}
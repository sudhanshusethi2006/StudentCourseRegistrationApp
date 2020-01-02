import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import {StudentService} from '../services/student.service';
import {ActivatedRoute,Router} from '@angular/router'
import { Student } from '../models';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {
  

   constructor(private _studentService : StudentService,private _router:Router) { }

  // constructor(private _studentService : StudentService) { }
  studentList: Student[];
  studentNumber:number;
  // @Output() studentSelected:EventEmitter<Student> = new EventEmitter<string>();
  @Output() studentSelectedEmit:  EventEmitter<Student> = new EventEmitter<Student>();
  studentSelected:Student;
  ngOnInit():void{
    this._studentService.getStudents().subscribe(studentList=>this.studentList=studentList);
    
  }


  ShowStudentInfo(event){



    for(let eachStudent of this.studentList){
        if(eachStudent.studentNumber==this.studentNumber){
          this.studentSelected=eachStudent;
          break;
        }
    }
    this.studentSelectedEmit.emit(this.studentSelected);
    // this._studentService.onStudentChange(this.studentSelected);
    // // this._routes.navigate(['/student-info',event] )
    // this._router.navigate(['./student-info'],{ queryParams:{ studentSelected: this.studentSelected}});
  }
  
  
  
}
import { Component,Input } from '@angular/core';
import {StudentService} from '../services/student.service';

import { Student } from '../models';
import { Course } from '../models';
@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent {
  constructor(private _studentService : StudentService) { }
  AllCoursesOfStudent:Course[]=[];

  @Input() listOfCourses: string[];
  StudentCourses:Course;


  ngOnChanges():void{
    
    for(let eachCourse of this.listOfCourses){
    
     this._studentService.getCourse(eachCourse).subscribe(StudentCourses=>this.StudentCourses=StudentCourses);
    // alert(this.StudentCourses.name);
     this.AllCoursesOfStudent.push(this.StudentCourses)
    }

    
  }
}

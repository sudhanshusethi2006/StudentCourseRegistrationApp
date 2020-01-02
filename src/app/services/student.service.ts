import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { Student, Course } from '../models';
import { Server } from '../infrastructure/server';

// import {Subject} from 'rxjs/Subject'

@Injectable({
  providedIn: 'root',
})
/**
 * This service provides data the app needs from the mock server
 */
export class StudentService {

  public newStudentSelected= new Subject<any>();
  constructor(private server: Server){
  }

  /**
   * Returns an Observable of Student array that represents all the school's students
   */
  getStudents(): Observable<Student[]> {
    return this.server.getStudents();
  }
  /**
   * Gets the Student object associated with a student email as an Observable
   */
  getStudent(studentEmail: string): Observable<Student> {
    return this.server.getStudent(studentEmail);
  }

  /**
   * Returns an Observable of string array that represents the course Ids 
   * that the student with the passed e-mail has registered for
   */
  getCourseIdsForStudent(studentEmail: string): Observable<string[]> {
    return this.server.getCourseIdsForStudent(studentEmail);
  }

  /**
   * Gets the Course object that is represented by the provided courseId as an Observable
   */
  getCourse(courseId: string): Observable<Course> {
    return this.server.getCourse(courseId);
  }


}
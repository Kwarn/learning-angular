import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../types';
import { MOCK_STUDENTS } from '../mock-students';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getStudents(): Observable<Student[]> {
    const students = of(MOCK_STUDENTS);
    return students;
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseTest, Student } from '../types';
import { MOCK_STUDENTS } from '../mock-students';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private API_URL = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.get<Student[]>(`${this.API_URL}/students`, {
      headers: headers,
    });
  }

  deleteStudent(id: String): Observable<ResponseTest> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    console.log('delete student id: ' + id);
    return this.http.delete<ResponseTest>(
      `${this.API_URL}/student/delete/${id}`,
      {
        headers: headers,
      }
    );
  }
}

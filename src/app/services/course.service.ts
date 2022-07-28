import { Injectable } from '@angular/core';
import { Course, ResponseTest } from '../types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private API_URL = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.get<Course[]>(`${this.API_URL}/courses`, {
      headers: headers,
    });
  }

  deleteCourse(id: String): Observable<ResponseTest> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    console.log('delete course id: ' + id);
    return this.http.delete<ResponseTest>(
      `${this.API_URL}/course/delete/${id}`,
      {
        headers: headers,
      }
    );
  }
}

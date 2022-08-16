import { Injectable } from '@angular/core';
import { Enroll } from '../types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EnrolmentService {
  private API_URL = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  enroll(enroll: Enroll): Observable<Enroll> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.http.post<Enroll>(`${this.API_URL}/api/enroll`, {
      headers: headers,
      variables: enroll,
    });
  }
}

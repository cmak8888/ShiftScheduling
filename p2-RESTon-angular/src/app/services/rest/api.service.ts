import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseURL: string = environment.api;

  get<T>(endpoint: string, headers?): Observable<any>{

    if(!headers) {
      headers = {withCredentials: true}
    }
    return this.http.get<T>(this.baseURL+endpoint, headers);
  }

  post<T>(endpoint:string, body: any, headers?): Observable<any>{
    if(!headers) {
      headers = {withCredentials: true}
    }
    return this.http.post<T>(this.baseURL+endpoint, body, headers);
  }

  put<T>(endpoint: string, body: any, headers?): Observable<any>{
    if(!headers) {
      headers = {withCredentials: true}
    }
    return this.http.put<T>(this.baseURL+endpoint, body, headers);
  }

  delete<T>(endpoint: string, headers?): Observable<any>{
    if(!headers) {
      headers = {withCredentials: true}
    }
    return this.http.delete<T>(this.baseURL+endpoint, headers);
  }
}

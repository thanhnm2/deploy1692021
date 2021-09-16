import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //API_SERVER
  private API_SIGNUP = environment.API_SERVER+'signup';
//API_LOCAL
//   private API_SIGNUP = environment.API_LOCAL+'signup';
  constructor(private http: HttpClient) { }
  signup (signup: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signup);

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://api.github.com/users'

  constructor(private http: HttpClient) { }


  readUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }


}

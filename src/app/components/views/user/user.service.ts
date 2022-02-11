import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserDetails, UserRepos } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://api.github.com/users'

  constructor(private http: HttpClient) { }


  readUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

  details(login: string): Observable<UserDetails> {
    const url = `${this.apiUrl}/${login}`
    return this.http.get<UserDetails>(url)
  }  
  
  repos(login: string): Observable<UserRepos[]> {
    const url = `${this.apiUrl}/${login}/repos`
    return this.http.get<UserRepos[]>(url)
  }
}

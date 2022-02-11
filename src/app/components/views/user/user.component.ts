import { UserService } from './user.service';
import { User } from './user.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  displayedColumns = ['id', 'login', 'details'];
  

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.readUsers().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }

}







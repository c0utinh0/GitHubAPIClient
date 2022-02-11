import { UserRepos } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

  userRepos: UserRepos[] = [];
  displayedColumns = ['id', 'name', 'html_url'];

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    ) { }


  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('login') as string
    this.userService.repos(login).subscribe(userRepos => {
      this.userRepos = userRepos
      console.log(userRepos)
    })
  }
}

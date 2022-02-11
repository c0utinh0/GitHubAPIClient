import { UserDetails } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails?: UserDetails;

  constructor(private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('login') as string
    this.userService.details(login).subscribe(userDetails => {
      this.userDetails = userDetails
      console.log(userDetails)
    })
  }

}

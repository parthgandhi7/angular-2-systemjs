import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-list-obs',
  templateUrl: 'app/userlistobs.component.html',
  providers: [UserService]
})

export class UserListObsComponent implements OnInit{ 
  users: User[];
  constructor(private userService: UserService, private router: Router){ }

  ngOnInit(): void {
      this.userService
        .getUsersObs()
        .subscribe(
          users => this.users = users, //Bind to view
          err => {
              // Log errors if any
              console.log(err);
          });
  }
  gotoDetail(user): void {
    this.router.navigate(['/detail', user.id]);
  }

}
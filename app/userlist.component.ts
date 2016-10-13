import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-list',
  templateUrl: 'app/userlist.component.html',
  providers: [UserService]
})

export class UserListComponent implements OnInit{ 
  users: User[];
  constructor(private userService: UserService, private router: Router){ }

  ngOnInit(): void {
      this.userService
        .getUsers()
        .then((users) => {
          this.users = users;
        });
  }
  gotoDetail(user): void {
    this.router.navigate(['/detail', user.id]);
  }

}
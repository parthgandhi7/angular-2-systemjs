import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-update',
  templateUrl: 'app/userupdate.component.html',
  providers: [UserService]
})

export class UserUpdateComponent implements OnInit{ 
  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    let id;
    this.route.params.forEach((params: Params) => {
      id = +params['id'];
    });
    this.userService.getUser(id)
      .then((user) => {
        console.log("user", user);
        this.user = user;
      });
  }
  updateUser(user): void {
    this.userService
    .updateUser(user, user.id)
    .then((user) => {
      alert("User has been updated successfully");
      this.router.navigate(['/users']);
    }).catch((err) => {
      alert("User could not be updated, please try again!");
    });
  }

}
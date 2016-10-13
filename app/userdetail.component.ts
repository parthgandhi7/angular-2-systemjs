import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-details',
  templateUrl: 'app/userdetail.component.html',
  providers: [UserService]
})

export class UserDetailComponent implements OnInit{ 
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
  editUser(user): void {
    this.router.navigate(['/update', user.id]);
  }

}
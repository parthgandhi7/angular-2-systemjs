import { Component, Input} from '@angular/core';
import { Router} from '@angular/router';

import { User } from './user';
import { Project } from './project';
import { Address } from './address';

import { UserService } from './user.service';

@Component({
  selector: 'user-create',
  templateUrl: 'app/usercreate.component.html',
  providers: [UserService]
})

export class UserCreateComponent { 
  user: any = {};
  address: any = {};
  projects: any = [];
  constructor(private userService: UserService, private router: Router){ }
  createUser(user, address, projects): void {
    if (Object.keys(address).length !== 0) {
      user.address = address;
    }

    if (projects.length !== 0) {
      let projectsArray = projects.filter(function(obj) {
        return Object.keys(obj).length !== 0;
      });

      user.projects = projectsArray
    }

    this.userService
    .createUser(user)
    .then((user) => {
      alert("User has been created successfully");
      this.router.navigate(['/users']);
    }).catch((err) => {
      alert("User could not be created, please try again!");
    });
  }
  addProjects(): void {
    this.projects.push({});
  }
}
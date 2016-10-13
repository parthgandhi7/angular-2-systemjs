import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }        from './app.component';
import { UserListComponent }        from './userlist.component';
import { UserListObsComponent }        from './userlistobs.component';

import { UserDetailComponent }        from './userdetail.component';
import { UserUpdateComponent }        from './userupdate.component';

import { UserCreateComponent }        from './usercreate.component';
import { FormsModule }   from '@angular/forms';

import { UserService }         from './user.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { Headers, Http } from '@angular/http';
import { RouterModule }   from '@angular/router';

@NgModule({
  imports:[ BrowserModule,
    FormsModule, HttpModule, JsonpModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent
      },
      {
        path: 'users/observable',
        component: UserListObsComponent
      },
      {
        path: 'update/:id',
        component: UserUpdateComponent
      },
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'users/create',
        component: UserCreateComponent
      }

    ])
  ],
  declarations: [ AppComponent,UserListObsComponent, UserListComponent, UserDetailComponent, UserCreateComponent, UserUpdateComponent ],
  bootstrap:    [ AppComponent ],
    providers: [
    UserService
  ],
})
export class AppModule { }

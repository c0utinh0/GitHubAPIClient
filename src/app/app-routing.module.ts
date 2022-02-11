import { UserDetailsComponent } from './components/views/user/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/views/home/home.component"
import { UserComponent } from './components/views/user/user.component';

const routes: Routes = [
  {
    path: "",
    component: UserComponent
  },
  {
    path: "user/details/:login",
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

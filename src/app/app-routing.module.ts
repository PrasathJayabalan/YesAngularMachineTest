import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserloginComponent } from '../app/userlogin/userlogin.component'
import { CreateUserprofComponent } from '../app/create-userprof/create-userprof.component'
 const routes: Routes = [
  { path: '', redirectTo: 'userlogin', pathMatch: 'full' },
  { path:'userlogin', component:UserloginComponent},
  {
    path:'user-details',component:UserDetailsComponent},
    {path:'create-userprof',component: CreateUserprofComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

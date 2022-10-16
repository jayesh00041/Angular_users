import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { UsersComponent } from './Components/users/users.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'users', component:UsersComponent},
  {path: 'user/form/:id', component:UserFormComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

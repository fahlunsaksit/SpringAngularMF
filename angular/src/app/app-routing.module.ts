import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from "./update-user/update-user.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateUserComponent } from "./create-user/create-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
  { path: 'update/:id', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

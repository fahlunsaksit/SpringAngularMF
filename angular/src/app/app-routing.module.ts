import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from "./update-user/update-user.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { ContentListComponent } from './content-list/content-list.component';
import { CreateContentComponent } from './create-content/create-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '1', component: HomeComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'contentList', component: ContentListComponent },
  // { path: 'contentCreate', component: CreateContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

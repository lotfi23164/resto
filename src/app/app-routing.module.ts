import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // contact : localhost:4200/contact
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'addingChef', component:AddChefComponent},
  {path: 'addingPlat', component:AddPlatComponent},
  {path: 'display-chef/:id', component:DisplayChefComponent},
  {path: 'edit-chef/:id', component:EditChefComponent},
  {path: 'display-plat/:id', component:DisplayPlatComponent},
  {path: 'edit-plat/:id', component:EditPlatComponent},
  {path: 'admin-signup', component:AdminSignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

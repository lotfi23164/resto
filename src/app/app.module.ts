import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExpensiveComponent } from './components/expensive/expensive.component';
import { PopualrDishesComponent } from './components/popualr-dishes/popualr-dishes.component';
import { HistoryComponent } from './components/history/history.component';
import { MenuComponent } from './components/menu/menu.component';
import { TeamComponent } from './components/team/team.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { EditPlatComponent } from './components/edit-plat/edit-plat.component';
import { DisplayPlatComponent } from './components/display-plat/display-plat.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';

// https://www.mongodb.com/try/download/community
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ExpensiveComponent,
    PopualrDishesComponent,
    HistoryComponent,
    MenuComponent,
    TeamComponent,
    ReservationComponent,
    BlogComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AddChefComponent,
    AddPlatComponent,
    DisplayChefComponent,
    EditChefComponent,
    EditPlatComponent,
    DisplayPlatComponent,
    AdminSignupComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderGuestComponent } from './components/header-guest/header-guest.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './components/shared/services/user.service';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursComponent } from './components/cours/cours.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HeaderAuthenticatedComponent } from './components/header-authenticated/header-authenticated.component';
import { TestsComponent } from './components/tests/tests.component';
import { TestComponent } from './components/test/test.component';



const routes: Routes = [
  { path: 'cours', component: CoursComponent },
  // Other routes if you have more
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderGuestComponent,
    HeaderAuthenticatedComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CoursesComponent,
    CoursComponent,
    TestsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

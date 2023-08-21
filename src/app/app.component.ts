import { Component, OnInit } from '@angular/core';
import { User } from './components/shared/models/user.model';
import { UserService } from './components/shared/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './components/shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authenticationService: AuthenticationService) {}
}

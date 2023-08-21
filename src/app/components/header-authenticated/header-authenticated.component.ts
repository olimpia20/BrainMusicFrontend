import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-header-authenticated',
  templateUrl: './header-authenticated.component.html',
  styleUrls: ['./header-authenticated.component.css']
})
export class HeaderAuthenticatedComponent {

  constructor( private authenticationService:AuthenticationService){}

  LogoutSetup(){
    this.authenticationService.logout();
  }

}

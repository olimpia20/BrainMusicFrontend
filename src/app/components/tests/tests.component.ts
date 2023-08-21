import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {

  constructor(private router: Router) {}

  redirectToTestPage(id:number): void{
    this.router.navigate(['/test'], { queryParams: { id: id} });
  }
}

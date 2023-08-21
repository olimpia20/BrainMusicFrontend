import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGuestComponent } from './header-guest.component';

describe('HeaderComponent', () => {
  let component: HeaderGuestComponent;
  let fixture: ComponentFixture<HeaderGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderGuestComponent]
    });
    fixture = TestBed.createComponent(HeaderGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

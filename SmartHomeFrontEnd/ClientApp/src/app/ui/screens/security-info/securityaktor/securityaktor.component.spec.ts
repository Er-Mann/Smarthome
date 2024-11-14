import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityaktorComponent } from './securityaktor.component';

describe('SecurityaktorComponent', () => {
  let component: SecurityaktorComponent;
  let fixture: ComponentFixture<SecurityaktorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityaktorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityaktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

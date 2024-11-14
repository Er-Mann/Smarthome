import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtionOverviewComponent } from './realtion-overview.component';

describe('RealtionOverviewComponent', () => {
  let component: RealtionOverviewComponent;
  let fixture: ComponentFixture<RealtionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

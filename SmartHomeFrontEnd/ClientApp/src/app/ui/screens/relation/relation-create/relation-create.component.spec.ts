import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationCreateComponent } from './relation-create.component';

describe('RelationCreateComponent', () => {
  let component: RelationCreateComponent;
  let fixture: ComponentFixture<RelationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

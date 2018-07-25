import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListworkoutsComponent } from './listworkouts.component';

describe('ListworkoutsComponent', () => {
  let component: ListworkoutsComponent;
  let fixture: ComponentFixture<ListworkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListworkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogclothesComponent } from './dogclothes.component';

describe('DogclothesComponent', () => {
  let component: DogclothesComponent;
  let fixture: ComponentFixture<DogclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

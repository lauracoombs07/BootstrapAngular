import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogfoodComponent } from './dogfood.component';

describe('DogfoodComponent', () => {
  let component: DogfoodComponent;
  let fixture: ComponentFixture<DogfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

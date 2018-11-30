import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogtoysComponent } from './dogtoys.component';

describe('DogtoysComponent', () => {
  let component: DogtoysComponent;
  let fixture: ComponentFixture<DogtoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogtoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogtoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantfoodComponent } from './elephantfood.component';

describe('ElephantfoodComponent', () => {
  let component: ElephantfoodComponent;
  let fixture: ComponentFixture<ElephantfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

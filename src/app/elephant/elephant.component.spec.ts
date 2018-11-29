import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantComponent } from './elephant.component';

describe('ElephantComponent', () => {
  let component: ElephantComponent;
  let fixture: ComponentFixture<ElephantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

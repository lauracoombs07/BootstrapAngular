import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephanttoysComponent } from './elephanttoys.component';

describe('ElephanttoysComponent', () => {
  let component: ElephanttoysComponent;
  let fixture: ComponentFixture<ElephanttoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephanttoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephanttoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

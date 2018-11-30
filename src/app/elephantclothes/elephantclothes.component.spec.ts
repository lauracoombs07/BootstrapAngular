import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantclothesComponent } from './elephantclothes.component';

describe('ElephantclothesComponent', () => {
  let component: ElephantclothesComponent;
  let fixture: ComponentFixture<ElephantclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

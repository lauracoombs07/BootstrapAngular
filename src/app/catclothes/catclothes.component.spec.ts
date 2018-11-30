import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatclothesComponent } from './catclothes.component';

describe('CatclothesComponent', () => {
  let component: CatclothesComponent;
  let fixture: ComponentFixture<CatclothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatclothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

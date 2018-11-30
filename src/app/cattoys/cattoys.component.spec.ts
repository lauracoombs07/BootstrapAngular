import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattoysComponent } from './cattoys.component';

describe('CattoysComponent', () => {
  let component: CattoysComponent;
  let fixture: ComponentFixture<CattoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

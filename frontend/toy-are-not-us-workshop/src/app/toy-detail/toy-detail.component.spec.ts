import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyDetailComponent } from './toy-detail.component';

describe('ToyDetailComponent', () => {
  let component: ToyDetailComponent;
  let fixture: ComponentFixture<ToyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

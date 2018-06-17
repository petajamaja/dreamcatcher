import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDreamsComponent } from './my-dreams.component';

describe('MyDreamsComponent', () => {
  let component: MyDreamsComponent;
  let fixture: ComponentFixture<MyDreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

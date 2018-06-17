import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamCreatorComponent } from './dream-creator.component';

describe('DreamCreatorComponent', () => {
  let component: DreamCreatorComponent;
  let fixture: ComponentFixture<DreamCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

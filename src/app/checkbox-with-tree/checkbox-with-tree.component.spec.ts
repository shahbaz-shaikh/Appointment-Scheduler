import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWithTreeComponent } from './checkbox-with-tree.component';

describe('CheckboxWithTreeComponent', () => {
  let component: CheckboxWithTreeComponent;
  let fixture: ComponentFixture<CheckboxWithTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxWithTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

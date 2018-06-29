import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCalculationsComponent } from './flow-calculations.component';

describe('FlowCalculationsComponent', () => {
  let component: FlowCalculationsComponent;
  let fixture: ComponentFixture<FlowCalculationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowCalculationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

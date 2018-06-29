import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignSegmentComponent } from './reassign-segment.component';

describe('ReassignSegmentComponent', () => {
  let component: ReassignSegmentComponent;
  let fixture: ComponentFixture<ReassignSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReassignSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

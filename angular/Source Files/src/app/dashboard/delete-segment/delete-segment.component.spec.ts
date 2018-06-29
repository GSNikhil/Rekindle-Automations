import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSegmentComponent } from './delete-segment.component';

describe('DeleteSegmentComponent', () => {
  let component: DeleteSegmentComponent;
  let fixture: ComponentFixture<DeleteSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

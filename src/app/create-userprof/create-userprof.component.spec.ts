import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserprofComponent } from './create-userprof.component';

describe('CreateUserprofComponent', () => {
  let component: CreateUserprofComponent;
  let fixture: ComponentFixture<CreateUserprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

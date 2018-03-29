import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriprequestComponent } from './triprequest.component';

describe('TriprequestComponent', () => {
  let component: TriprequestComponent;
  let fixture: ComponentFixture<TriprequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

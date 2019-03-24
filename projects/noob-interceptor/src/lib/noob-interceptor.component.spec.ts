import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoobInterceptorComponent } from './noob-interceptor.component';

describe('NoobInterceptorComponent', () => {
  let component: NoobInterceptorComponent;
  let fixture: ComponentFixture<NoobInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoobInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoobInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

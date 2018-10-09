import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeviceDemoComponent } from './sevice-demo.component';

describe('SeviceDemoComponent', () => {
  let component: SeviceDemoComponent;
  let fixture: ComponentFixture<SeviceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeviceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeviceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

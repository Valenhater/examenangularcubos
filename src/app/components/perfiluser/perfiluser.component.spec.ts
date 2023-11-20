import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiluserComponent } from './perfiluser.component';

describe('PerfiluserComponent', () => {
  let component: PerfiluserComponent;
  let fixture: ComponentFixture<PerfiluserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfiluserComponent]
    });
    fixture = TestBed.createComponent(PerfiluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

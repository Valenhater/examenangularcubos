import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasuserComponent } from './comprasuser.component';

describe('ComprasuserComponent', () => {
  let component: ComprasuserComponent;
  let fixture: ComponentFixture<ComprasuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasuserComponent]
    });
    fixture = TestBed.createComponent(ComprasuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

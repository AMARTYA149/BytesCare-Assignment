import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspClientComponent } from './usp-client.component';

describe('UspClientComponent', () => {
  let component: UspClientComponent;
  let fixture: ComponentFixture<UspClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UspClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UspClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

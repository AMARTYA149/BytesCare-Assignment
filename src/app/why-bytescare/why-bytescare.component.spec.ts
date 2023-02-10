import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBytescareComponent } from './why-bytescare.component';

describe('WhyBytescareComponent', () => {
  let component: WhyBytescareComponent;
  let fixture: ComponentFixture<WhyBytescareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyBytescareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyBytescareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

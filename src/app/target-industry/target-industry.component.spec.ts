import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetIndustryComponent } from './target-industry.component';

describe('TargetIndustryComponent', () => {
  let component: TargetIndustryComponent;
  let fixture: ComponentFixture<TargetIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

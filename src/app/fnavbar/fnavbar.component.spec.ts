import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnavbarComponent } from './fnavbar.component';

describe('FnavbarComponent', () => {
  let component: FnavbarComponent;
  let fixture: ComponentFixture<FnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

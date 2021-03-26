import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownotificationComponent } from './shownotification.component';

describe('ShownotificationComponent', () => {
  let component: ShownotificationComponent;
  let fixture: ComponentFixture<ShownotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShownotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

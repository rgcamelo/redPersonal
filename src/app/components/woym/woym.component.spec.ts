import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoymComponent } from './woym.component';

describe('WoymComponent', () => {
  let component: WoymComponent;
  let fixture: ComponentFixture<WoymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

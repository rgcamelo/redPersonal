import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthBarComponent } from './rigth-bar.component';

describe('RigthBarComponent', () => {
  let component: RigthBarComponent;
  let fixture: ComponentFixture<RigthBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigthBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaSkolarceComponent } from './za-skolarce.component';

describe('ZaSkolarceComponent', () => {
  let component: ZaSkolarceComponent;
  let fixture: ComponentFixture<ZaSkolarceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaSkolarceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaSkolarceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

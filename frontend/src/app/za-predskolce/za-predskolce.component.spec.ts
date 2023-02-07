import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaPredskolceComponent } from './za-predskolce.component';

describe('ZaPredskolceComponent', () => {
  let component: ZaPredskolceComponent;
  let fixture: ComponentFixture<ZaPredskolceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaPredskolceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaPredskolceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

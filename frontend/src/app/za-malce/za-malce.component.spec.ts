import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaMalceComponent } from './za-malce.component';

describe('ZaMalceComponent', () => {
  let component: ZaMalceComponent;
  let fixture: ComponentFixture<ZaMalceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaMalceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaMalceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzletiComponent } from './izleti.component';

describe('IzletiComponent', () => {
  let component: IzletiComponent;
  let fixture: ComponentFixture<IzletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzletiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthChildComponent } from './eth-child.component';

describe('EthChildComponent', () => {
  let component: EthChildComponent;
  let fixture: ComponentFixture<EthChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthChildComponent]
    });
    fixture = TestBed.createComponent(EthChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

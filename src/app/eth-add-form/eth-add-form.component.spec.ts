import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthAddFormComponent } from './eth-add-form.component';

describe('EthAddFormComponent', () => {
  let component: EthAddFormComponent;
  let fixture: ComponentFixture<EthAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthAddFormComponent]
    });
    fixture = TestBed.createComponent(EthAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

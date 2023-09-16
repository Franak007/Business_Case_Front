import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthModifFormComponent } from './eth-modif-form.component';

describe('EthModifFormComponent', () => {
  let component: EthModifFormComponent;
  let fixture: ComponentFixture<EthModifFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthModifFormComponent]
    });
    fixture = TestBed.createComponent(EthModifFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

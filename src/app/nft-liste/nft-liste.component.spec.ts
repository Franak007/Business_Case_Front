import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftListeComponent } from './nft-liste.component';

describe('NftListeComponent', () => {
  let component: NftListeComponent;
  let fixture: ComponentFixture<NftListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftListeComponent]
    });
    fixture = TestBed.createComponent(NftListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

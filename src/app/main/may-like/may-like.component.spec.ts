import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayLikeComponent } from './may-like.component';

describe('MayLikeComponent', () => {
  let component: MayLikeComponent;
  let fixture: ComponentFixture<MayLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayLikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

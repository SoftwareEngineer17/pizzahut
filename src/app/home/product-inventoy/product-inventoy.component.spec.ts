import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInventoyComponent } from './product-inventoy.component';

describe('ProductInventoyComponent', () => {
  let component: ProductInventoyComponent;
  let fixture: ComponentFixture<ProductInventoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInventoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInventoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

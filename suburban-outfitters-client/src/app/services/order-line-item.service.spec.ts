import { TestBed } from '@angular/core/testing';

import { OrderLineItemService } from './order-line-item.service';

describe('OrderLineItemService', () => {
  let service: OrderLineItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderLineItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

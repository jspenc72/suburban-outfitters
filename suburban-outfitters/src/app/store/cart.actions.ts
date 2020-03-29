import { ICartItem } from '../models/cart-item.model';

export class AddItemAction {
  static readonly type = '[CartState] Add Item';
  constructor(public payload: ICartItem) { }
}

export class RemoveItemAction {
  static readonly type = '[CartState] Remove Item';
  constructor(public payload: ICartItem) { }
}

export class SubmitOrderAction {
  static readonly type = '[CartState] Submit Order';
  constructor(public payload: any) { }
}

export class SubmitOrderActionSuccess {
  static readonly type = '[CartState] Submit Order Success';
  constructor(public payload: any) { }
}

export class SubmitOrderActionFail {
  static readonly type = '[CartState] Submit Order Fail';
  constructor(public payload: any) { }
}

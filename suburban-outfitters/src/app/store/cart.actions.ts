import { ICartItem } from '../models/cart-item.model';

export class AddItemAction {
  static readonly type = '[CartState] Add Item';
  constructor(public payload: ICartItem) { }
}

export class RemoveItemAction {
  static readonly type = '[CartState] Remove Item';
  constructor(public payload: ICartItem) { }
}

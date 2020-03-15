import { ICartItem } from '../models/cart-item.model';

export class AddItemAction {
  static readonly type = '[CartState] Add Item';
  constructor(public payload: ICartItem) { }
}

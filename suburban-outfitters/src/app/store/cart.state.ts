import { State, Selector, Action, StateContext, Store } from '@ngxs/store';
import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICartItem } from '../models/cart-item.model';
import * as cartActions from './cart.actions';
import { Injectable } from '@angular/core';

export interface CartStateModel {
  loading: boolean;
  items: ICartItem[];
  total: number;
}

@State<CartStateModel>({
  name: 'cartState',
  defaults: {
    loading: false,
    items: [],
    total: 0
  },
})
@Injectable()
export class CartState {

  @Selector()
  static loading(state: CartStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static items(state: CartStateModel): ICartItem[] {
    return state.items;
  }

  @Selector()
  static itemCount(state: CartStateModel): number {
    return state.items.reduce((a, b) => a + (b.quantity || 0), 0);
  }

  @Selector()
  static total(state: CartStateModel): number {
    return state.total;
  }

  constructor(
    private store: Store,
    private snackbar: MatSnackBar
  ) { }

  @Action(cartActions.AddItemAction)
  async AddItemAction(
    ctx: StateContext<CartStateModel>,
    { payload }: cartActions.AddItemAction
  ) {
    const state = ctx.getState();
    const existingCartItem = state.items.find(i => i.id === payload.id);
    if (!existingCartItem) {
      ctx.setState(
        patch({
          items: append([payload])
        })
      );
    } else {
      ctx.setState(
        patch({
          items: updateItem(item => item.id === payload.id, patch({ quantity: (existingCartItem.quantity + payload.quantity) }))
        })
      );
    }

    // TODO: calculate total
    this.snackbar.open('Added to Cart', null, {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  }
}

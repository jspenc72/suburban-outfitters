import { State, Selector, Action, StateContext, Store } from '@ngxs/store';
import { patch, append, updateItem } from '@ngxs/store/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICartItem } from '../models/cart-item.model';
import * as cartActions from './cart.actions';
import { Injectable } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';

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
    private snackbar: MatSnackBar,
    private checkoutService: CheckoutService
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

  @Action(cartActions.RemoveItemAction)
  async RemoveItemAction(
    ctx: StateContext<CartStateModel>,
    { payload }: cartActions.RemoveItemAction
  ) {
    const state = ctx.getState();
    const existingCartItem = state.items.find(i => i.id === payload.id);

    const subtractValue = existingCartItem.quantity - payload.quantity < 0 ? 0 : payload.quantity;

    if (!existingCartItem) {
      ctx.setState(
        patch({
          items: append([payload])
        })
      );
    } else {
      ctx.setState(
        patch({
          items: updateItem(item => item.id === payload.id, patch({ quantity: (existingCartItem.quantity - subtractValue) }))
        })
      );
    }

    // TODO: calculate total
    this.snackbar.open('Added to Cart', null, {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  }

  @Action(cartActions.SubmitOrderAction)
  async SubmitOrderAction(
    { patchState, dispatch }: StateContext<CartStateModel>,
    { payload }: cartActions.SubmitOrderAction
  ) {
    patchState({ loading: true });
    this.checkoutService.submitOrder(payload)
      .pipe(
        tap((response: number) => {
          dispatch(new cartActions.SubmitOrderActionSuccess(response));
        }),
        catchError(error => dispatch(new cartActions.SubmitOrderActionFail(error)))
      );
  }

  @Action(cartActions.SubmitOrderActionSuccess)
  async SubmitOrderActionSuccess(
    { patchState }: StateContext<CartStateModel>,
    { payload }: cartActions.SubmitOrderActionSuccess
  ) {
    patchState({ loading: false });
    this.snackbar.open(`Order Complete: #${payload}`, null, {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  }

  @Action(cartActions.SubmitOrderActionFail)
  async SubmitOrderActionFail(
    { patchState }: StateContext<CartStateModel>,
    { payload }: cartActions.SubmitOrderActionFail
  ) {;
    patchState({ loading: false });
    this.snackbar.open(`Error Completing Order: ${payload}`, null, {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  }
}

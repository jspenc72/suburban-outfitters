import { State, Selector, Action, StateContext, Store } from '@ngxs/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from '../models/user.model';
import * as userActions from './user.actions';
import { Injectable } from '@angular/core';

export interface UserStateModel {
  loading: boolean;
  user: IUser;
}

@State<UserStateModel>({
  name: 'userState',
  defaults: {
    loading: false,
    user: null,
  },
})
@Injectable()
export class UserState {

  @Selector()
  static loading(state: UserStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static user(state: UserStateModel): IUser {
    return state.user;
  }

  constructor(
    private store: Store,
    private snackbar: MatSnackBar
  ) { }

  @Action(userActions.LoginAction)
  async login(ctx: StateContext<UserStateModel>) {
    ctx.patchState({ loading: true });
    // await some method goes here
    //   .then(user => {
    //     ctx.dispatch(new userActions.LoginSuccessAction());
    //   })
    //   .catch(err => {
    //     ctx.dispatch(new userActions.LoginFailAction(err.message));
    //   });
  }

  @Action(userActions.LoginSuccessAction)
  async loginSuccess(
    ctx: StateContext<UserStateModel>,
    { payload }: userActions.LoginSuccessAction
  ) {
    ctx.patchState({ loading: false, user: payload });
  }

  @Action(userActions.LoginFailAction)
  LoginFail(
    ctx: StateContext<UserStateModel>,
    { payload }: userActions.LoginFailAction
  ) {
    const errorMessage: string = 'Login Failed: ' + payload;
    console.log(errorMessage);
    ctx.patchState({ loading: false });
    this.snackbar.open(errorMessage, null, {
      duration: 3000,
      verticalPosition: 'bottom'
    });
  }
}

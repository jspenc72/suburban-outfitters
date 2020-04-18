import { IUser } from '../models/user.model';

export class LoginAction {
  static readonly type = '[UserState] Login';
}

export class LoginSuccessAction {
  static readonly type = '[UserState] Login Success';
  constructor(public payload: IUser) { }
}

export class LoginFailAction {
  static readonly type = '[UserState] Login Failed';
  constructor(public payload: string) { }
}

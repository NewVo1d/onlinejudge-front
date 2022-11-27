/* eslint-disable @typescript-eslint/ban-types */
import { Middleware, MiddlewareContext } from 'oh-router';
import { getToken } from '../../common/token';
import { userStore } from './../../common/userStore';

export class UserInfoMiddleware extends Middleware {
  async handler(ctx: MiddlewareContext<{}>, next: () => Promise<any>): Promise<void> {
    const token = getToken();
    if (token && !userStore.user) {
      await userStore.feachUser();
    }
    next();
  }
}

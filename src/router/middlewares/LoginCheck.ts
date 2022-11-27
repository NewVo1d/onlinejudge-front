/* eslint-disable @typescript-eslint/ban-types */
import { Middleware, MiddlewareContext } from 'oh-router';
import { getToken } from '../../common/token';
import { router } from './../index';

export class LoginCheckMiddleware extends Middleware {
  async handler(ctx: MiddlewareContext<{}>, next: () => Promise<any>): Promise<void> {
    const token = getToken();

    if (ctx.to.pathname === '/login') {
      if (token) {
        router.navigate('/');
      } else {
        next();
      }
    }

    if (token) {
      next();
    } else {
      router.navigate('/login');
    }
  }

  register(ctx: MiddlewareContext<{}>): boolean {
    return ctx.to.pathname.split('/').length > 2;
  }
}

/* eslint-disable @typescript-eslint/ban-types */
import { Middleware, MiddlewareContext } from 'oh-router';
import { Meta, router } from './../index';
import { userStore } from './../../common/userStore';

export class RoleCheckMiddleware extends Middleware {
  async handler(ctx: MiddlewareContext<Meta>, next: () => Promise<any>): Promise<void> {
    if (ctx.to.meta.role.includes(userStore.user.role)) {
      next();
    } else {
      alert('无权访问');
      if (!ctx.from) {
        router.navigate('/');
      }
    }
  }
  register(ctx: MiddlewareContext<Meta>): boolean {
    return ctx.to.meta.role !== undefined;
  }
}

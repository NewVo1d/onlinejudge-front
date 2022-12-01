import { Router } from 'oh-router';
import NotFound from './../pages/NotFound/index';
import { LoginCheckMiddleware } from './middlewares/LoginCheck';
import Login from './../pages/Login/index';
import { RoleCheckMiddleware } from './middlewares/RoleCheck';
import { UserInfoMiddleware } from './middlewares/UserInfo';
import { PageLayout } from '../components/PageLayout';
import About from '../pages/Page/About';
import Contest from '../pages/Page/Contest';
import Home from '../pages/Page/Home';
import Problem from '../pages/Page/Problem';
import Rank from '../pages/Page/Rank';
import Status from '../pages/Page/Status';

export interface Meta {
  role: ('user' | 'admin' | 'superAdmin')[];
}

export const router = new Router({
  middlewares: [new LoginCheckMiddleware(), new UserInfoMiddleware(), new RoleCheckMiddleware()],
  routes: [
    {
      path: '/',
      redirect: '/home',
      element: <PageLayout />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/problem',
          element: <Problem />
        },
        {
          path: '/contest',
          element: <Contest />
        },
        {
          path: '/status',
          element: <Status />
        },
        {
          path: '/rank',
          element: <Rank />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ]
});

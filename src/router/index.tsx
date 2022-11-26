import { Router } from 'oh-router';
import Contest from '../pages/Contest';
import Home from '../pages/Home';
import Problem from '../pages/Problem';
import Status from '../pages/Status';
import Rank from './../pages/Rank/index';
import About from './../pages/About/index';
import { PageLayout } from '../main';
import NotFound from './../pages/NotFound/index';
import { LoginCheckMiddleware } from './middlewares/LoginCheck';
import Login from './../pages/Login/index';

export const router = new Router({
  middlewares: [new LoginCheckMiddleware()],
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

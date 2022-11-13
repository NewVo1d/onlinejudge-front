import { Router } from 'oh-router';
import Contest from '../pages/Contest';
import Home from '../pages/Home';
import Problem from '../pages/Problem';
import Status from '../pages/Status';
import Rank from './../pages/Rank/index';
import About from './../pages/About/index';
import { PageLayout } from '../main';

export const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
      element: <PageLayout />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/problem',
          element: <Problem />,
        },
        {
          path: '/contest',
          element: <Contest />,
        },
        {
          path: '/status',
          element: <Status />,
        },
        {
          path: '/rank',
          element: <Rank />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ],
});

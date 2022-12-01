import ReactDOM from 'react-dom/client';
import { RouterView } from 'oh-router-react';
import { router } from './router';
import 'reset-css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterView router={router} />
);

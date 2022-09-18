import About from './pages/About';
import Lifting from './pages/Lifting';
import Main from './pages/Main';
import Registration from './pages/Registration';

export const routes = [
  { path: '/', element: <Main /> },
  { path: '/registration', element: <Registration /> },
  { path: '/lifting', element: <Lifting /> },
  { path: '/about', element: <About /> },
];

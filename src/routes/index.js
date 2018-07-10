import Home from '../pages/Home';
import Post from '../pages/Post';
import User from '../pages/User';
import About from '../pages/About';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/post/:id',
    component: Post,
    exact: true,
  },
  {
    path: '/user/:id',
    component: User,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
];

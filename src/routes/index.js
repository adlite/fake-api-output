import Home from '../pages/Home';
import Post from '../pages/Post';

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
];

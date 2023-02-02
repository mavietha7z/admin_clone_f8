import Home from '~/layouts/Home';
import Login from '~/layouts/components/Login';
import Slideshow from '~/pages/Slideshow';
import Courses from '~/pages/Courses';
import Posts from '~/pages/Posts';
import Videos from '~/pages/Videos';
import Accounts from '~/pages/Accounts';

const privateRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
    { path: '/course', component: Courses },
    { path: '/blog', component: Posts },
    { path: '/video', component: Videos },
    { path: '/slideshow', component: Slideshow },
    { path: '/users', component: Accounts },
];

export { privateRoutes };

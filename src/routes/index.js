import Home from '~/layouts/Home';
import Chapter from '~/pages/course/Chapter';
import DetailCourse from '~/pages/course/DetailCourse';
import EditCourse from '~/pages/course/EditCourse';
import CreateVideo from '~/pages/video/CreateVideo';
import CreateUser from '~/pages/account/CreateUser';
import EditUser from '~/pages/account/EditUser';
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
    { path: '/course/chapter/:id', component: Chapter },
    { path: '/course/detail', component: DetailCourse },
    { path: '/course/edit', component: EditCourse },
    { path: '/blog', component: Posts },
    { path: '/video', component: Videos },
    { path: '/video/create', component: CreateVideo },
    { path: '/slideshow', component: Slideshow },
    { path: '/users', component: Accounts },
    { path: '/users/create', component: CreateUser },
    { path: '/users/edit/:id', component: EditUser },
];

export { privateRoutes };

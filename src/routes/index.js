import Home from '~/layouts/Home';
import Posts from '~/pages/Posts';
import Videos from '~/pages/Videos';
import Courses from '~/pages/Courses';
import Accounts from '~/pages/Accounts';
import LearningPaths from '~/pages/LearningPaths';
import Slideshows from '~/pages/Slideshows';
import Login from '~/layouts/components/Login';

const privateRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
    { path: '/course', component: Courses },
    { path: '/blog', component: Posts },
    { path: '/video', component: Videos },
    { path: '/slideshow', component: Slideshows },
    { path: '/users', component: Accounts },
    { path: '/learnings', component: LearningPaths },
];

export { privateRoutes };

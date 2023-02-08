import Home from '~/layouts/Home';
import Posts from '~/pages/Posts';
import Videos from '~/pages/Videos';
import Courses from '~/pages/Courses';
import Accounts from '~/pages/Accounts';
import Slideshows from '~/pages/Slideshows';
import Login from '~/layouts/components/Login';
import LearningPaths from '~/pages/LearningPaths';

const privateRoutes = [
    { path: '/', component: Home },
    { path: '/blog', component: Posts },
    { path: '/video', component: Videos },
    { path: '/users', component: Accounts },
    { path: '/course', component: Courses },
    { path: '/slideshow', component: Slideshows },
    { path: '/learnings', component: LearningPaths },
    { path: '/login', component: Login, layout: null },
];

export { privateRoutes };

// Import components trang chủ
import Home from '~/layouts/Home';

// Import components khóa học
import CourseList from '~/pages/CourseList';
import CreateCourse from '~/pages/course/CreateCourse';
import Chapter from '~/pages/course/Chapter';
import DetailCourse from '~/pages/course/DetailCourse';
import EditCourse from '~/pages/course/EditCourse';

// Import components bài viết
import PostsList from '~/pages/PostsList';

// Import components video
import VideoList from '~/pages/VideoList';
import CreateVideo from '~/pages/video/CreateVideo';

// Import components tài khoản
import AccountList from '~/pages/AccountList';
import CreateUser from '~/pages/account/CreateUser';
import EditUser from '~/pages/account/EditUser';

import Login from '~/layouts/components/Login';
import Slideshow from '~/pages/Slideshow';

const privateRoutes = [
    // Route trang chủ
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },

    // Route trang khóa học
    { path: '/course', component: CourseList },
    { path: '/course/create', component: CreateCourse },
    { path: '/course/chapter/:id', component: Chapter },
    { path: '/course/detail', component: DetailCourse },
    { path: '/course/edit', component: EditCourse },

    // Route trang blog
    { path: '/blog', component: PostsList },

    // Route trang thống kê
    { path: '/video', component: VideoList },
    { path: '/video/create', component: CreateVideo },

    { path: '/slideshow', component: Slideshow },

    // Route trang tài khoản
    { path: '/users', component: AccountList },
    { path: '/users/create', component: CreateUser },
    { path: '/users/edit/:id', component: EditUser },
];

export { privateRoutes };

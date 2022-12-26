// Import components trang chủ
import Home from '~/layouts/Home';

// Import components khóa học
import ListCourse from '~/pages/course/ListCourse';
import CreateCourse from '~/pages/course/CreateCourse';
import Chapter from '~/pages/course/Chapter';
import DetailCourse from '~/pages/course/DetailCourse';
import EditCourse from '~/pages/course/EditCourse';

// Import components bài viết
import ListBlog from '~/pages/blog/ListBlog';
import CreateBlog from '~/pages/blog/CreateBlog';

// Import components video
import ListVideo from '~/pages/video/ListVideo';
import CreateVideo from '~/pages/video/CreateVideo';

// Import components tin tức
import NewsCreate from '~/pages/news/NewsCreate';
import NewsEdit from '~/pages/news/NewsEdit';
import CreateNews from '~/pages/news/CreateNews';
import EditNews from '~/pages/news/EditNews';

// Import components tài khoản
import ListUser from '~/pages/account/ListUser';
import CreateUser from '~/pages/account/CreateUser';
import EditUser from '~/pages/account/EditUser';

import Settings from '~/pages/system/Settings';
import ConfigMail from '~/pages/system/ConfigMail';
import EditMail from '~/pages/system/ConfigMail/EditMail';

// Export components 404 not found
import NotFound from '~/layouts/NotFound';
import Login from '~/layouts/components/Login';

const privateRoutes = [
    // Route trang chủ
    { path: '/', component: Home },

    { path: '/login', component: Login, layout: null },
    // Route trang khóa học
    { path: '/course', component: ListCourse },
    { path: '/course/create', component: CreateCourse },
    { path: '/course/chapter/:id', component: Chapter },
    { path: '/course/detail', component: DetailCourse },
    { path: '/course/edit', component: EditCourse },

    // Route trang đổi thẻ cào
    { path: '/blog', component: ListBlog },
    { path: '/blog/create', component: CreateBlog },

    // Route trang thống kê
    { path: '/video', component: ListVideo },
    { path: '/video/create', component: CreateVideo },

    { path: '/news_cat/create', component: NewsCreate },
    { path: '/news_cat/2/edit', component: NewsEdit },
    { path: '/news/create', component: CreateNews },
    { path: '/news/7/edit', component: EditNews },

    // Route trang tài khoản
    { path: '/users', component: ListUser },
    { path: '/users/create', component: CreateUser },
    { path: '/users/edit/:id', component: EditUser },

    // Route trang cấu hình hệ thống
    { path: '/settings', component: Settings },
    { path: '/sendmail/setting', component: ConfigMail },
    { path: '/sendmail/driver/:id/update', component: EditMail },

    // Route trang 400 not found
    { path: '*', component: NotFound, layout: null },
];

export { privateRoutes };

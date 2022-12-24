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
import News from '~/pages/news/NewsPage';
import NewsCat from '~/pages/news/NewsCat';
import NewsCreate from '~/pages/news/NewsCreate';
import NewsEdit from '~/pages/news/NewsEdit';
import CreateNews from '~/pages/news/CreateNews';
import EditNews from '~/pages/news/EditNews';

// Import components tài khoản
import ListUser from '~/pages/account/ListUser';
import CreateUser from '~/pages/account/CreateUser';
import EditUser from '~/pages/account/EditUser';

// Import components tools
import SEOPage from '~/pages/tools/SEOPage';
import CreateSEO from '~/pages/tools/CreateSEO';
import EditSEO from '~/pages/tools/EditSEO';
import DeleteData from '~/pages/tools/DeleteData';

// Import components modun
import Menu from '~/pages/module/Menu';
import CreateMenu from '~/pages/module/Menu/CreateMenu';
import EditMenu from '~/pages/module/Menu/EditMenu';
import Static from '~/pages/module/Static';
import CreateStatic from '~/pages/module/Static/CreateStatic';
import EditStatic from '~/pages/module/Static/EditStatic';
import Slider from '~/pages/module/Slider';
import CreateSlider from '~/pages/module/Slider/CreateSlider';
import Webdata from '~/pages/module/Webdata';
import CreateWebdata from '~/pages/module/Webdata/CreateWebdata';
import EditWebdata from '~/pages/module/Webdata/EditWebdata';
import Twofactor from '~/pages/module/Twofactor';
import Banner from '~/pages/module/Banner';
import CreateBanner from '~/pages/module/Banner/CreateBanner';
import EditBanner from '~/pages/module/Banner/EditBanner';
import Merchant from '~/pages/module/Merchant';
import CreateMerchant from '~/pages/module/Merchant/CreateMerchant';
import EditMerchant from '~/pages/module/Merchant/EditMerchant';

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

    // Route trang tin tức
    { path: '/news', component: News },
    { path: '/news_cat', component: NewsCat },
    { path: '/news_cat/create', component: NewsCreate },
    { path: '/news_cat/2/edit', component: NewsEdit },
    { path: '/news/create', component: CreateNews },
    { path: '/news/7/edit', component: EditNews },

    // Route trang tài khoản
    { path: '/users', component: ListUser },
    { path: '/users/create', component: CreateUser },
    { path: '/users/edit/:id', component: EditUser },

    // Route trang công cụ
    { path: '/seo', component: SEOPage },
    { path: '/seo/create', component: CreateSEO },
    { path: '/seo/:id/edit', component: EditSEO },
    { path: '/tools', component: DeleteData },

    // Route trang mô-đun
    { path: '/menu', component: Menu },
    { path: '/menu/create', component: CreateMenu },
    { path: '/menu/:id/edit', component: EditMenu },
    { path: '/pages', component: Static },
    { path: '/pages/create', component: CreateStatic },
    { path: '/pages/:id/edit', component: EditStatic },
    { path: '/sliders', component: Slider },
    { path: '/sliders/create', component: CreateSlider },
    { path: '/webdata', component: Webdata },
    { path: '/webdata/create', component: CreateWebdata },
    { path: '/webdata/:id/edit', component: EditWebdata },
    { path: '/twofactor', component: Twofactor },
    { path: '/banners', component: Banner },
    { path: '/banners/create', component: CreateBanner },
    { path: '/banners/:id/edit', component: EditBanner },
    { path: '/merchants', component: Merchant },
    { path: '/merchants/create', component: CreateMerchant },
    { path: '/merchants/:id/edit', component: EditMerchant },

    // Route trang cấu hình hệ thống
    { path: '/settings', component: Settings },
    { path: '/sendmail/setting', component: ConfigMail },
    { path: '/sendmail/driver/:id/update', component: EditMail },

    // Route trang 400 not found
    { path: '*', component: NotFound, layout: null },
];

export { privateRoutes };

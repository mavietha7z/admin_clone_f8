// Import components trang chủ
import Home from '~/layouts/Home';

// Import components mã thẻ cào
import ListCourse from '~/pages/course/ListCourse/ListCourse';
import CreateCourse from '~/pages/course/CreateCourse';
import DetailCourse from '~/pages/course/DetailCourse';
import EditProduct from '~/pages/course/EditProduct';

// Import components đổi thẻ cào
import Charging from '~/pages/chargings/Charging';
import Pending from '~/pages/chargings/Pending';
import Telcos from '~/pages/chargings/Telcos';
import CreateCharging from '~/pages/chargings/CreateCharging';
import Channel from '~/components/Channel/Channel';
import EditCharging from '~/pages/chargings/EditCharging';
import ProviderCharging from '~/pages/chargings/ProviderCharging';
import EditNcc from '~/pages/chargings/EditNcc';
import TestCharging from '~/pages/chargings/TestCharging/TestCharging';
import SettingCharging from '~/pages/chargings/SettingCharging';

// Import components thống kê
import StatCharging from '~/pages/stat/StatCharging';
import StatMtopup from '~/pages/stat/StatMtopup';
import StatOrders from '~/pages/stat/StatOrders';
import StatStockCard from '~/pages/stat/StatStockCard';
import StatDeposit from '~/pages/stat/StatDeposit';
import StatWithdraw from '~/pages/stat/StatWithdraw';
import StatDaily from '~/pages/stat/StatDaily/';
import StatUser from '~/pages/stat/StatUser';

// Import components tin tức
import News from '~/pages/news/NewsPage';
import NewsCat from '~/pages/news/NewsCat';
import NewsCreate from '~/pages/news/NewsCreate';
import NewsEdit from '~/pages/news/NewsEdit';
import CreateNews from '~/pages/news/CreateNews';
import EditNews from '~/pages/news/EditNews';

// Import components tài khoản
import User from '~/pages/account/User';
import CreateUser from '~/pages/account/CreateUser';
import EditUser from '~/pages/account/EditUser';
import Group from '~/pages/account/Group';
import CreateGroup from '~/pages/account/CreateGroup';
import EditGroup from '~/pages/account/EditGroup';
import Role from '~/pages/account/Role';
import CreateRole from '~/pages/account/CreateRole';
import EditRole from '~/pages/account/EditRole';
import Power from '~/pages/account/Power';
import CreatePower from '~/pages/account/CreatePower';
import EditPower from '~/pages/account/EditPower';
import LoginHistory from '~/pages/account/LoginHistory';

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

const privateRoutes = [
    // Route trang chủ
    { path: '/', component: Home },

    // Route trang khóa học
    { path: '/course/list', component: ListCourse },
    { path: '/course/create', component: CreateCourse },
    { path: '/course/detail', component: DetailCourse },
    { path: '/course/47/edit', component: EditProduct },

    // Route trang đổi thẻ cào
    { path: '/chargings', component: Charging },
    { path: '/chargings/pending', component: Pending },
    { path: '/chargings/telcos', component: Telcos },
    { path: '/chargings/telcos/create', component: CreateCharging },
    { path: '/chargings/chanel/VIETNAMOBILE', component: Channel },
    { path: '/chargings/telcos/6/edit', component: EditCharging },
    { path: '/chargings/provider', component: ProviderCharging },
    { path: '/chargings/provider/22/update', component: EditNcc },
    { path: '/chargings/testcard', component: TestCharging },
    { path: '/chargings/setting', component: SettingCharging },

    // Route trang thống kê
    { path: '/statistic/charging', component: StatCharging },
    { path: '/statistic/mtopup', component: StatMtopup },
    { path: '/statistic/softcard', component: StatOrders },
    { path: '/statistic/stockcard', component: StatStockCard },
    { path: '/statistic/deposit', component: StatDeposit },
    { path: '/statistic/withdraw', component: StatWithdraw },
    { path: '/statistic/dailystat', component: StatDaily },
    { path: '/statistic/user', component: StatUser },

    // Route trang tin tức
    { path: '/news', component: News },
    { path: '/news_cat', component: NewsCat },
    { path: '/news_cat/create', component: NewsCreate },
    { path: '/news_cat/2/edit', component: NewsEdit },
    { path: '/news/create', component: CreateNews },
    { path: '/news/7/edit', component: EditNews },

    // Route trang tài khoản
    { path: '/users', component: User },
    { path: '/users/create', component: CreateUser },
    { path: '/users/452/edit', component: EditUser },
    { path: '/groups', component: Group },
    { path: '/groups/create', component: CreateGroup },
    { path: '/groups/4/edit', component: EditGroup },
    { path: '/roles', component: Role },
    { path: '/roles/create', component: CreateRole },
    { path: '/roles/7/edit', component: EditRole },
    { path: '/powers', component: Power },
    { path: '/powers/create', component: CreatePower },
    { path: '/powers/:id/edit', component: EditPower },
    { path: '/login-history', component: LoginHistory },

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

import { faBlog, faBook, faGauge, faNewspaper, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';

const sidebar = [
    {
        title: 'Bảng quản trị',
        linkTo: '/',
        icon: faGauge,
    },
    {
        title: 'Khóa học',
        icon: faBook,
        sub: [
            {
                linkTo: '/course',
                title: 'Danh sách khóa học',
            },
            {
                linkTo: '/course/create',
                title: 'Thêm mới khóa học',
            },
        ],
    },
    {
        title: 'Tài khoản',
        icon: faUser,
        sub: [
            {
                linkTo: '/users',
                title: 'Danh sách người dùng',
            },
            {
                linkTo: '/users/create',
                title: 'Thêm mới người dùng',
            },
        ],
    },
    {
        title: 'Bài viết',
        icon: faBlog,
        sub: [
            {
                linkTo: '/blog',
                title: 'Danh sách bài viết',
            },
        ],
    },
    {
        title: 'Video',
        icon: faVideo,
        sub: [
            {
                linkTo: '/video',
                title: 'Danh sách video',
            },
            {
                linkTo: '/video/create',
                title: 'Thêm mới video',
            },
        ],
    },
    {
        title: 'Slideshow',
        icon: faNewspaper,
        sub: [
            {
                linkTo: '/slideshow',
                title: 'Danh sách slideshow',
            },
            {
                linkTo: '/slideshow/create',
                title: 'Thêm mới slideshow',
            },
        ],
    },
];

export default sidebar;

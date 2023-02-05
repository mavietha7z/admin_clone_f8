import {
    faBlog,
    faBook,
    faGauge,
    faNewspaper,
    faUser,
    faVideo,
    faLinesLeaning,
} from '@fortawesome/free-solid-svg-icons';

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
        ],
    },
    {
        title: 'Lộ trình học',
        icon: faLinesLeaning,
        sub: [
            {
                linkTo: '/learnings',
                title: 'Danh sách lộ trình',
            },
        ],
    },
];

export default sidebar;

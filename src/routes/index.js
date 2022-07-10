import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// publicRoutes

const publicRoutes = [
    { Path: '/', component: Home },
    { Path: '/following', component: Following },
    { Path: '/profile', component: Profile },
    { Path: '/upload', component: Upload, layout: HeaderOnly },
    { Path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

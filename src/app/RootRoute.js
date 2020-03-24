import App from 'app/components/App';
import Benchmark from 'app/components/pages/Benchmark';
import PostsIndex from 'app/components/pages/PostsIndex';
import resolveRoute from './ResolveRoute';

// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

export default {
    path: '/',
    component: App,
    getChildRoutes(nextState, cb) {
        const route = resolveRoute(nextState.location.pathname);
        if (route.page === 'About') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/About')]);
            //});
        } else if (route.page === 'Welcome') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Welcome')]);
            //});
        } else if (route.page === 'Leoshop') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Leoshop')]);
            //});
        } else if (route.page === 'Syndication') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Syndication')]);
            //});
        } else if (route.page === 'Leopedia') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Leopedia')]);
            //});
        } else if (route.page === 'Keychain') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Keychain')]);
            //});
        } else if (route.page === 'Delegatetokens') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Delegatetokens')]);
            //});
        } else if (route.page === 'Glossary') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Glossary')]);
            //});
        } else if (route.page === 'Faq') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Faq')]);
            //});
        } else if (route.page === 'Steem') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Steem')]);
            //});
        } else if (route.page === 'Heytron') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Heytron')]);
            //});
        } else if (route.page === 'Communities') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Communities')]);
            //});
        } else if (route.page === 'Podcast') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Podcast')]);
            //});
        } else if (route.page === 'Steemsoftfork') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Steemsoftfork')]);
            //});
        } else if (route.page === 'Approachtodiversification') {
            //require.ensure([], (require) => {
            cb(null, [
                require('app/components/pages/Approachtodiversification'),
            ]);
            //});
        } else if (route.page === 'Buffettonbitcoin') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Buffettonbitcoin')]);
            //});
        } else if (route.page === 'Leodex') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Leodex')]);
            //});
        } else if (route.page === 'Login') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Login')]);
            //});
        } else if (route.page === 'Privacy') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Privacy')]);
            //});
        } else if (route.page === 'Support') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Support')]);
            //});
        } else if (
            route.page === 'XSSTest' &&
            process.env.NODE_ENV === 'development'
        ) {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/XSS')]);
            //});
        } else if (route.page === 'Benchmark') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Benchmark')]);
            //});
        } else if (route.page === 'Tags') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/TagsIndex')]);
            //});
        } else if (route.page === 'Tos') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Tos')]);
            //});
        } else if (route.page === 'ChangePassword') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/ChangePasswordPage')]);
            //});
        } else if (route.page === 'RecoverAccountStep1') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/RecoverAccountStep1')]);
            //});
        } else if (route.page === 'Witnesses') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Witnesses')]);
            //});
        } else if (route.page === 'SubmitPost') {
            if (process.env.BROWSER) {
                // require.ensure([], (require) => {
                cb(null, [require('app/components/pages/SubmitPost')]);
                // });
            } else {
                cb(null, [
                    require('app/components/pages/SubmitPostServerRender'),
                ]);
            }
        } else if (route.page === 'UserProfile') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/UserProfile')]);
            //});
        } else if (route.page === 'Market') {
            require.ensure([], require => {
                cb(null, [require('app/components/pages/Market')]);
            });
        } else if (route.page === 'Post') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/PostPage')]);
            //});
        } else if (route.page === 'PostNoCategory') {
            cb(null, [require('app/components/pages/PostPageNoCategory')]);
        } else if (route.page === 'Dashboard') {
            //require.ensure([], (require) => {
            cb(null, [require('app/components/pages/Dashboard')]);
            //});
        } else if (route.page === 'PostsIndex') {
            //require.ensure([], (require) => {
            //cb(null, [require('app/components/pages/PostsIndex')]);
            cb(null, [PostsIndex]);
            //});
        } else {
            //require.ensure([], (require) => {
            cb(process.env.BROWSER ? null : Error(404), [
                require('app/components/pages/NotFound'),
            ]);
            //});
        }
    },
    indexRoute: {
        component: PostsIndex.component,
    },
};

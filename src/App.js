import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { privateRoutes } from './routes';
import { refreshUser } from './services/apiAuth';
import DefaultLayout from './layouts/DefaultLayout';
import { logoutSuccess } from './redux/reducer/authReducer';

function App() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    useEffect(() => {
        if (window.performance) {
            if (performance.navigation.type === 1) {
                if (currentUser) {
                    const fetchApi = async () => {
                        const result = await refreshUser(currentUser.accessToken, dispatch);

                        if (result.statusCode !== 0) {
                            dispatch(logoutSuccess());
                            window.location.href = '/login';
                            window.location.reload();
                        }
                    };
                    fetchApi();
                } else {
                    window.location.href = '/login';
                }
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    {privateRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;

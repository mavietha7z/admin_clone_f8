import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store, persistor } from '~/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </PersistGate>
    </Provider>
);

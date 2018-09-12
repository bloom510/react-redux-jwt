import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import Welcome from './components/card/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Feature from './components/admin/Feature';
import NotFound from './components/NotFound'
import reducers from './reducers';

import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/css/index.css'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducers,
    { 
        authReducer: { authenticated: localStorage.getItem('token') }
    },
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <CssBaseline />
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/feature' component={Feature} />
                    <Route path='/signout' component={Signout} />
                    <Route path='/signin' component={Signin} />
                    <Route path='*' restricted={false} component={NotFound} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

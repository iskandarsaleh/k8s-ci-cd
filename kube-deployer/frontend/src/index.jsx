import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './app/reducers';

let store;
if(ENVIRONMENT==='development'){
    store = applyMiddleware(multi, promise,thunk)(createStore)(reducers,devTools);
    console.log('DEV ENVIRONMENT');
}else{
    store = applyMiddleware(multi, promise,thunk)(createStore)(reducers);
}

const app = (<Provider store={store}>
        <App/>
    </Provider>)
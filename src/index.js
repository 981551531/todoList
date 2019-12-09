import React from 'react';
import ReactDOM from 'react-dom';
import Aa from './aa';
import store from './store'

import { Provider } from 'react-redux'
const App = (
    <Provider store={store}>
        <Aa />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routers/routers'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/saga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();

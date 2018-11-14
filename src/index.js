import React from 'react';
import ReactDOM from 'react-dom';
 

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import thunk from 'redux-thunk';

import reducers from  './reducers/all_reducers'


import App from './containers/app';
 


//const createStoreWithMiddleware =    applyMiddleware ( promiseMiddleware ) ( createStore );
 

const store = createStore ( reducers,  applyMiddleware(promiseMiddleware, thunk) );


//original:  build "react-scripts build",  -> "build": "react-scripts build",


ReactDOM.render(

	<Provider store={ store }  >
			<App />
	</Provider>,
	 
	document.getElementById('root')

);




 
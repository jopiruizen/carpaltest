import React from 'react';
import { shallow , mount , configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure ( {adapter: new Adapter()} );


import  App  from "../containers/App";
 


/* boilerplate */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from  '../reducers/all_reducers'


//test redux presents 

const store = createStore ( reducers,  applyMiddleware(promiseMiddleware, thunk) );
const app= shallow(<App/>);
const appWithProvider =   <Provider store={store}><App/></Provider>;
const wrappedProvider = mount( appWithProvider );

 //Test COmponents 

it( 'renders correctly', () => {  
	expect ( app ).toMatchSnapshot();
});

 





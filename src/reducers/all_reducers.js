import { combineReducers } from 'redux';
import excel from './excel_reducers';
import local_store from './local_store_reducer';

const allReducers = combineReducers ( 
	{
		excel, 
		local_store
	}
)

export default allReducers;
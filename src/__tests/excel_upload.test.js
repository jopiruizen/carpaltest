
import React from 'react';
import { shallow , mount , configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure ( {adapter: new Adapter()} );


import {ExcelUpload_instance} from '../components/excel_upload';
 
var excelUpload =   shallow (ExcelUpload_instance());

it("ExcelUpload renders correctly.", () => {
	expect ( excelUpload ).toMatchSnapshot();
});

 
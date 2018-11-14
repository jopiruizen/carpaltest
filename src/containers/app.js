import React, { Component } from 'react';

//Views 
import ExcelDisplay from '../components/excel_display';
import ExcelUpload from '../components/excel_upload';
import StatusSync from  '../components/status_sync';


import '../css/app_styles.css';

class App extends Component {
	render() {
		return ( 
			<div>
				<div className="header"> 
					<ExcelUpload />
					<StatusSync />
				</div>
				<ExcelDisplay />
			</div>
		)
	}

}

export default App;

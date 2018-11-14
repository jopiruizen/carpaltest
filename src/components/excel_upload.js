import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {parse_excel} from '../actions/excel_actions'
//will not receive anything.. but will trigger file selection action 


const mapStateToProps = ( state ) => {
	return  ( 
		{
			"somekey": ""
		}	 
	);
}


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators (
		{
			parse_excel
		}, 
		dispatch
	)
}

class ExcelUpload extends Component {

	state = {   "somekey" : "hello" };


 	shouldComponentUpdate ( props, state ) {
 		console.log("Being updated... "   );
 		return true;
 	}

 	_buttonClick = ( event ) => {
 		console.log(this.refs.input_file)
 		this.refs.input_file.click();
 	}

	_inputChange = ( event ) => {
		this.props.parse_excel(event.target);
	}

	render ()  {
		return (	
			<div className="upload-box">
				<input type="file" className="file_btn" ref="input_file"  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"  onChange={this._inputChange }/>
				<input className="upload_btn" type="button" value="UPLOAD EXCEL" onClick={this._buttonClick}/>
			</div>
		)
	}
	 
}

 
export default connect( mapStateToProps, mapDispatchToProps ) (ExcelUpload);


export function  ExcelUpload_instance ()  {
	return <ExcelUpload/>;
}

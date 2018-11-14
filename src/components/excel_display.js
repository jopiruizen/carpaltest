import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {request_saved_excel,check_connection} from '../actions/store_actions';

//will not dispatch anything but will receive ...


const mapStateToProps = ( state ) => {
	console.log("excel_display.mapStateToProps.updating...");
	console.log(state);
	 return {
	 	excel_content: state.local_store.excel_content,
	 	has_connection: state.local_store.has_connection
	 }
}

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators ({request_saved_excel, check_connection} , dispatch);
}


class ExcelDisplay  extends Component {

	checkConnectionDelay = () => {
		this.props.check_connection();
	}

	componentDidMount() {
		this.props.request_saved_excel () ;
 		//this.props.check_connection();
	}	
 
	render() {
		console.log(this.props);
		return  ( 
			<div className="data-content"> 
				{this.renderTable()}
				{this.checkConnectionDelay()}
			</div>
		);
	}

	renderTable = () => {
		if( this.props.excel_content === null || this.props.excel_content === undefined ) {
			return (
				<h2> No Data to Show! </h2>
			);
		} else {
			return ( 
				<table><tbody>
					{this.renderHeader()}
					{this.renderRows()}
				</tbody></table>
			)
		}

		
	}


	renderHeader = () =>  { 
		var header = this.props.excel_content.header;
		return ( 
			<tr>{this.renderHeaderItems( header )}</tr>
		);
 	}

 	renderHeaderItems = (header) =>  {
 		var jsx = [];
 		for ( let i = 0; i < header.length; i++ ) { 			
 			jsx.push( (<th key={i.toString()}>{header[i]  }</th>) );
 		}
 		return jsx;
 	}

	renderRows = () => {
		var rows = this.props.excel_content.rows;

		var jsx = [];
		for( let i =0 ; i < rows.length;i++ ){
			jsx.push (
				(<tr key={i}>{this.renderRowItem(rows[i])}</tr>)
			);
		}
		return jsx;
	}

	renderRowItem = ( item ) => {
		var jsx = [];
		for( let i=0; i < item.length;i++) {
			jsx.push(
				<td key={i}>{item[i]}</td>
			);
		}
		return jsx;
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (ExcelDisplay);
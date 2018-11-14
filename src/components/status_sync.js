import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { check_connection, sync_data } from '../actions/store_actions';

//will dispatch sync from the database to upload files  to the server..
//will show if there is a server connection..


const mapStateToProps = ( state ) => {
	 console.log("Status SYnc: Map State to Props ");
	 console.log(  state );
	 return {
	 	has_connection: state.local_store.has_connection, 
	 	sync_complete: state.local_store.sync_complete
	 }
}


const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators ({  check_connection ,sync_data } , dispatch);
}


class StatusSync extends Component {

	state = {  button_disabled: true  , is_syncing: false , label:"SYNC" };

	componentDidMount() {
		this.props.check_connection();
	}

	update_syncstatus = () => {
		var me = this;
		function callback( ) {
			me.state.label = "SYNC";
			me.setState({is_syncing: false}  );
		}
		setTimeout(  callback, 5000);
	}
 	
	__syncData = (event) => {
		this.state.is_syncing = true;
 		//this.refs.sync_btn.value = "SYNCING...";
 		this.state.label = "SYNCING...";
 		this.setState( {button_disabled:true});
 		this.props.sync_data();
 		this.update_syncstatus();
	}

	shouldComponentUpdate ( prop, newProp ) {
		/*
		 if( prop.sync_complete == "SYNC_COMPLETE") {
		 	console.log("Sync complete...");		 	 
		 	this.state.is_syncing = false;
		 	console.log("Sync complete..." + this.state.is_syncing );
		 	
		 	return true;
		 }
		*/
		return true;
	}
	 

	 
 
	render() {
		
		console.log("rerender()  " + this.state.is_syncing  + " has COnnection " + this.props.has_connection );

		if(this.props.has_connection === "YES" ) {

			this.state.button_disabled = this.state.is_syncing;		 
		} else {
			this.state.button_disabled = true;
	 	}

		return (
			<div className="sync_status">
				<input ref="sync_btn" type="button" value={this.state.label} disabled={this.state.button_disabled} onClick={this.__syncData} />
			</div>
		);
	}
}

export default connect( mapStateToProps, mapDispatchToProps) (StatusSync);
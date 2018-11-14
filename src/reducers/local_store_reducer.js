
export default function local_store_reducer (state = {} , action ) {
	//console.log("local_store_reducer().. " + action.excel_content);	
	//console.log( state );
	switch( action.type ) {

		case "CONNECTION_VERIFIED":
			return {...state, has_connection: action.has_connection};

		case "EXCEL_PARSED":
			return {...state , excel_content: action.excel_content } ;

		case "PREVIOUSLY_SAVED_EXCEL":
			//console.log("Return for PREVIOUSLY_SAVED_EXCEL..") ;
			return {...state , excel_content: action.excel_content } ;

		case "DATA_SYNCED" :
			return {...state ,  sync_complete: "SYNC_COMPLETE"  };	
		default: 
			return state;
	}

	return state;
}
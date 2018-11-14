
import LocalStoreUtil from "./local_store_util";


import axios from 'axios';

import RequestServices from './request_service';

export function request_saved_excel () {

	var util =  new LocalStoreUtil();
	var data = util.get_prev_excel();
	//console.log("request_saved_excel");
	//console.log(data);
	return {
		type: "PREVIOUSLY_SAVED_EXCEL",
		excel_content: data
	}
}


export async   function check_connection () {
	
	var req = new RequestServices();
	var promise = req.post("https://philardona.000webhostapp.com/react/serv/test.php", {} );
	var data = await promise;

	if( data.status == "ok") {

		var util =  new LocalStoreUtil();
		var data = util.get_prev_excel();
		if( data != null || data != undefined ) {
			return { type:"CONNECTION_VERIFIED", has_connection:"YES"} ;
		}
	}

	return { type:"CONNECTION_VERIFIED", has_connection:"NO"} ;


	/*
	POST NOT WORKINGON AXIOS CROSS DOMAIN ... :( 
	Need to create my own post...


	return function ( dispatch ) {
		axios.post("https://philardona.000webhostapp.com/react/serv/test.php", {} )
		.then (
			(response) => {
				console.log("check_connection() has connection is YES"); 
				dispatch( { type:"CONNECTION_VERIFIED", has_connection:"YES"}  ) ;
			}
		) .catch ( 

			(err ) => {
				console.log("check_connection() has connection is NO");
				dispatch( { type:"CONNECTION_VERIFIED", has_connection:"NO"}  );
			}
		);
	}
	*/
	 
}

export async function sync_data() {

	var util =  new LocalStoreUtil();
	var data = util.get_prev_excel();
	var url = "https://philardona.000webhostapp.com/react/serv/test.php" ;
 	
 	var req = new RequestServices();
 	var promise = req.post( url , data );

 	console.log("will sync data...");
	var data = await promise;
	
	console.log("Data Synced...");

	return { type:"DATA_SYNCED", sync_complete: "SYNC_COMPLETE" } ;
}
import * as XLSX from 'xlsx';


class ParseExcel  {
	 
	constructor (   ) {
	 
	}

	promise_parse = ( target ) => {

 		var file = target.files[0];
 		//console.log("reading file...");

 		var helper = this.formalize_for_state;

 		const  promise_func = ( resolve, reject ) => {

 			var reader = new FileReader ();

 			reader.onload = function  (e) {

 				 var data = e.target.result;
    			 data = new Uint8Array(data);
   				 var workbook = XLSX.read(data, {type: 'array'});
   				 const sheet = workbook.SheetNames[0];
  				 const ws = workbook.Sheets[sheet];
   				
   				 /* Convert array of arrays */
    			const json = XLSX.utils.sheet_to_json(ws, {header:1});
    			const header = json.shift();
    			const content =  { header: header,rows: json };
   				 //console.log("######## Async Return File Read resolving promise..."  );
				resolve ( content);
 			}

 			reader.readAsArrayBuffer(file);
 			//reader.readAsText( file);
 		};


 		var promise = new Promise( promise_func );
 	 
 		return promise;
 	}

}


export default ParseExcel;
import * as XLSX from 'xlsx';


class ParseExcel  {
	 
	constructor (   ) {
	 
	}

  has_error = (target) =>  {
      if( target === null || target === undefined ) {  return true;  }
      if( target.files === null || target.files === undefined ) { return true; }
      if( target.files.length === 0 ) { return true; }
      return false;
  }

  promise_with_error  = () => {
     const promise_func = ( resolve, reject ) => {
        resolve({ error: "malformed object error" , message: "the parameter passed  didn't come from a file select/change event."});
     }
     return new Promise ( promise_func );
  } 

	promise_parse = ( target ) => {
    if( this.has_error ( target ) ) { return this.promise_with_error(); }


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


 		return new Promise( promise_func );
 	}

}


export default ParseExcel;
import ParseExcel from "./parse_excel";
import LocalStoreUtil from "./local_store_util";

export async function  parse_excel ( excel ) {
	//console.log("parse_excel() it should wait... " );
	var parser = new ParseExcel();
	var promise  = parser.promise_parse ( excel );
	var content_json = await promise;
	var util = new LocalStoreUtil();
	util.save_new_excel (   content_json );

	
	//console.log("Excell parsed..." + content_json );
	return  {
		type: "EXCEL_PARSED",
		excel_content: content_json
	};
	 
}
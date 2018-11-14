class LocalStoreUtil {
	
	constructor() {

	}

	save_new_excel = ( content  ) => {
		//console.log("Save new excel");
		var cstr = JSON.stringify( content );
		localStorage.setItem ( "app_xls" , cstr );
	}

	get_prev_excel = () => {
		//console.log("Get_Prev_excel");
		if( localStorage.getItem( "app_xls") == null)  {
			//console.log("it's null..");
			return null;
		}

		var cstr = localStorage.getItem( "app_xls")
		//console.log(" cstr" + cstr );
		var data ={} ;
		eval ( "data = " + cstr + "");
		//console.log( data );
		return data ;
	}
}

export default LocalStoreUtil;
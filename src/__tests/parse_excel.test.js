import ParseExcel from '../actions/parse_excel' ;


describe ("ParseExcel.promise_parse on error", () => {
	it( "Parse Excel file or reponse a decent error message along with the JSON. ",  async  () => {
		const parser =  new ParseExcel();
		const data = await parser.promise_parse( {} );
		const expectation ={ 
				error: "malformed object error" , 
					message: "the parameter passed  didn't come from a file select/change event."
				} ;

		expect ( data ).toEqual( expectation );
	});
});


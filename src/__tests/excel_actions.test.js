import { parse_excel  } from '../actions/excel_actions' 


describe( "parse_excel action", () =>  {

	it( 'parse excel and return EXCEL_PARSED type action regardless of state shape.', () => { 
		const expectation = { type:"EXCEL_PARSED"  };
		var action =  parse_excel({});

		/*	 remember need to wait because there is lag on promises even it uses async/await. */ 
		function waitCallback ( ) {
			expect (  action.type  ).toEqual( expectation.type );
			done();
		}
		setTimeout( waitCallback , 1000 );
	})



	

});
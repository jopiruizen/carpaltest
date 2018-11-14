import { request_saved_excel, check_connection, sync_data  } from '../actions/store_actions' 



describe( "store_actions action test.", () =>  {


	it( 'checks check_connection', () => { 
		const expectation = { type:"CONNECTION_VERIFIED" };
		var action =  check_connection();

		/*	 remember need to wait because there is lag on promises even it uses async/await. */ 
		function waitCallback ( ) {
			expect (  action.type  ).toEqual( expectation.type );
			done();
		}

		setTimeout( waitCallback , 1000 );
	});


	it( 'checks sync_data action', () => { 
		const expectation = { type:"DATA_SYNCE" };
		var action =  sync_data();

		/*	 remember need to wait because there is lag on promises even it uses async/await. */ 
		function waitCallback ( ) {
			expect (  action.type  ).toEqual( expectation.type );
			done();
		}

		setTimeout( waitCallback , 1000 );
	});


	it( 'checks to load previously save excel', () => { 

		const expectation = { type:"PREVIOUSLY_SAVED_EXCEL" };
		var action =  request_saved_excel();

		/*	 remember need to wait because there is lag on promises even it uses async/await. */ 
		function waitCallback ( ) {
			expect (  action.type  ).toEqual( expectation.type );
			done();
		}

		setTimeout( waitCallback , 1000 );
	})


});
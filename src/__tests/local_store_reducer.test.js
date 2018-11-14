import  local_store_reducer   from '../reducers/local_store_reducer' 
describe( "local_store_reducer test", () =>  {

	it( 'checks for CONNECTION_VERIFIED state shape value', () => { 
		const expectation = {  has_connection: "NO" };  
		const state =  local_store_reducer({}, { type:"CONNECTION_VERIFIED", has_connection:"NO" } );
		expect( state.has_connection ).toEqual( expectation.has_connection );
	});

	it( 'checks for EXCEL_PARSED state results', () => { 
		const expectation = {  excel_content: "some excel content" }; 
		const state =  local_store_reducer({}, { type:"EXCEL_PARSED", excel_content:"some excel content" } );
		expect( state.excel_content ).toEqual( expectation.excel_content );
	});


	it( 'checks for PREVIOUSLY_SAVED_EXCEL state results', () => { 
		const expectation = {  excel_content: "some excel content" }; 
		const state =  local_store_reducer({}, { type:"PREVIOUSLY_SAVED_EXCEL", excel_content:"some excel content" } );
		expect( state.excel_content ).toEqual( expectation.excel_content );
	});

	it( 'checks for DATA_SYNCED state results', () => { 
		const expectation = {   sync_complete: "SYNC_COMPLETE"  }; 
		const state =  local_store_reducer({}, { type:"DATA_SYNCED" } );
		expect( state.sync_complete ).toEqual( expectation.sync_complete );
	});



});


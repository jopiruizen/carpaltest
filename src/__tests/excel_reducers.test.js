import  excel_reducers   from '../reducers/excel_reducers' 
describe( "excel_reducers reducer test", () =>  {

	it( 'checks  excel reducer to return default state on any action', () => { 
		const expectation = {  }; //any object 
		const state =  excel_reducers({}, {});
		expect( state ).toEqual( expectation );
	});

});

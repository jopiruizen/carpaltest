 import  RequestServices from '../actions/request_service' 


describe( "Request Service utitlity if it works.", () =>  {
	
	it( 'checks post of request services.', () => { 
		 
		 console.log("Testing connection");

		var promise = new RequestServices().post("https://philardona.000webhostapp.com/react/serv/test.php", {} );
		promise.then( ( data ) => {
			expect(data.status).not.toBe(null);
			done();
		});

	})

});
const {assert} = require('console');
const { isTypeArray } = require('util/types');
const Storage = artifacts.require('Storage');

contract('Storage', () => {
	let storage = null;
	before( async () => {
		storage = await Storage.deployed();
	} );

	it('should store a number ', async () => {

		await storage.store( 57 );
		const _num = await storage.retrieve();
		console.log( 'show > ', _num.toString());
		assert( _num.toString() === '57');
	});

	it('should store a message ', async () => {

		const _myMsg = await storage.myMsg();
		console.log('show > ', _myMsg);
		assert(_myMsg === 'Hello BCWorld');
	});

	it('should store address ', async () => {

		const _myAccount = await storage.myAccount();
		console.log('show > ', _myAccount);
		assert(_myAccount !== null);
	});

})
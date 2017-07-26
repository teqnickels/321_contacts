const { addContact, addContacts } = require( '../src/contact' )

const testContactStorage = [];
addContact( 'blah', 'meh', 'me@me.com', testContactStorage )
addContact( '44', 'meh', 'me@me.com', testContactStorage )

console.assert( testContactStorage.length > 0, 'addContact did not add a contact to your array' )

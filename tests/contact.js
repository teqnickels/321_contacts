const { addContact, addContacts, contactStorage } = require( '../src/contact' )

addContacts( [{first_name:44, last_name:'meh', email:'me@me.com'}, {first_name:'me', last_name:'meh', email:'me@me.com'}] )
console.assert( contactStorage.length > 0, 'addContact did not add a contact to your array' );

const { addContact, addContacts, contactStorage } = require( '../src/contact' )


addContact('deb', 'mc', 'me@me.com')
console.assert(contactStorage.length == 20, 'addContact could not add your contact to contactStorage')


addContacts( [{first_name:44, last_name:'meh', email:'me@me.com'}, {first_name:'me', last_name:'meh', email:'me@me.com'}] )
console.assert( contactStorage.length > 0, 'addContacts did not add a contact to your array' );

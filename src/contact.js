
require('console.table');

let contactStorage = [] // here is where you'll store your contacts

const addContact = function(firstName, lastName, email, array) {
  if(typeof firstName !== 'string' || typeof lastName !== 'string') {
    throw new Error('Enter first name and last name only');
  }
    var newContact = {  first_name:firstName, last_name:lastName, email:email }
    array.push(  newContact  )
}

try {
  addContact( 'deb', 'mcewen', 'me@me.com', contactStorage )
  // addContact( 33,'da', 'u@me.com', contactStorage )
  addContact( 'ryan', 'better', 'rb@me.com', contactStorage )
  addContact( 'rudy', 'jefferson', 'rj@me.com', contactStorage )
  addContact( 'rudy', 'jefferson', 'rj@me.com', contactStorage )
console.log( 'contacts', contactStorage);
}
catch(error) {
  console.log(error.message, error.name);
}

const addContacts = function(arr) {
for (var i = 0; i < arr.length; i++) {
  addContact( arr[i].first_name, arr[i].last_name, arr[i].email)
  }
  // console.log('the arr', contactStorage);
}

const printContacts = function() {
   var compare = function( a, b ) {
    if( a.first_name < b.first_name ) {
      return -1
    }
    if( a.first_name > b.first_name ) {
      return 1
    }
    if( a.first_name == b.first_name ) {
      return 0
    }
  }

  for ( var i = 0; i < contactStorage.length; i++ ) {
    var newArrConstruct = contactStorage.sort( compare )
    for ( var i = 0; i < newArrConstruct.length; i++ ) {
      var fullName = newArrConstruct[i].first_name + ' ' + newArrConstruct[i].last_name
      var email = newArrConstruct[i].email
      if( fullName.length < 21 ) {
        var nameSpaces = Array(21 - fullName.length).join(' ')
      }
      if( email.length < 34 ) {
        emailSpaces = Array(34 - email.length).join(' ')
      }

      var underscores = Array(61).join("_")
      var dashes = Array(61).join('-')
      newArrConstruct[i] = { '| Full Name          |': '|' + fullName + nameSpaces +'|','| Email                            |': '| ' + newArrConstruct[i].email + emailSpaces + '|' }
    }
    }
    console.table( underscores, newArrConstruct, dashes );
  }

///////////////////////////////////////////////////////////////////////////

addContacts([
  {
    "first_name": "Tanny",
    "last_name": "Vibert",
    "email": "tvibert0@illinois.edu",
  },
  {
  "first_name": "Tova",
  "last_name": "Myall",
  "email": "tmyall1@instagram.com"
  },
  {
  "first_name": "Engracia",
  "last_name": "Folger",
  "email": "efolger2@epa.gov"
  },
  {
  "first_name": "Conroy",
  "last_name": "Honsch",
  "email": "chonsch3@sohu.com"
  },
  {
  "first_name": "Virgina",
  "last_name": "Cankett",
  "email": "vcankett4@washington.edu"
  },
  {
  "first_name": "Mateo",
  "last_name": "Da Costa",
  "email": "mdacosta5@about.com"
  },
  {
  "first_name": "Ambrose",
  "last_name": "Scullard",
  "email": "ascullard6@timesonline.co.uk"
  },
  {
  "first_name": "Shaylah",
  "last_name": "Fairney",
  "email": "sfairney7@stumbleupon.com"
  },
 {
  "first_name": "Pier",
  "last_name": "Waine",
  "email": "pwaine8@unc.edu"
  },
 {
  "first_name": "Karita",
  "last_name": "Bough",
  "email": "kbough9@angelfire.com"
  },
 {
  "first_name": "Marguerite",
  "last_name": "Lafayette",
  "email": "mlafayettea@bravesites.com"
  },
 {
  "first_name": "Northrop",
  "last_name": "Bauchop",
  "email": "nbauchopb@pagesperso-orange.fr"
  },
 {
  "first_name": "Devon",
  "last_name": "Bocking",
  "email": "dbockingc@comcast.net"
  },
 {
  "first_name": "Willdon",
  "last_name": "Hedley",
  "email": "whedleyd@purevolume.com"
  },
 {
  "first_name": "Charil",
  "last_name": "Clegg",
  "email": "cclegge@weibo.com"
  },
 {
  "first_name": "Nessi",
  "last_name": "Bywaters",
  "email": "nbywatersf@shop-pro.jp"
  },
 {
  "first_name": "Mercy",
  "last_name": "Browncey",
  "email": "mbrownceyg@yelp.com"
  },
 {
  "first_name": "Didi",
  "last_name": "Grose",
  "email": "dgroseh@google.com.hk"
  },
 {
  "first_name": "Niccolo",
  "last_name": "Spruce",
  "email": "nsprucei@wordpress.com"
  },
 {
  "first_name": "Winston",
  "last_name": "Hixley",
  "email": "whixleyj@homestead.com"
 }
  ])

  printContacts()
  // addContact('debrena','mcewen','me@me.com')


module.exports = { addContact, addContacts }

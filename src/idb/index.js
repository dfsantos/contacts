import Dexie from 'dexie'

const db = new Dexie('contacts')
db.version(1).stores({
  contacts: 'firstName, lastName'
})

db.contacts.put({firstName: 'Test', lastName: 'Name'})

export default db

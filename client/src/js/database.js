//import openDB from idb to allow for connection to IndexedDB
import { openDB } from 'idb';

const initdb = async () =>
  //Create new database called 'jate'
  openDB('jate', 1, {
    // Add database to schema if not already installed
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      //Create a new object store 'jate' and give key name 'id" and auto increment
      db.createObjectStore('jate', {
        keyPath: 'id',
        autoIncrement: true,
      });
      //Console message that the database is created
      console.log('jate database created');
    },
  });

// Export Put request
export const putDb = async (content) => {
  console.log('PUT request to update the database');
  //Create connection to db
  const jateDB = await openDB('jate', 1);
  // Create new transaction and specify the the database and the privilages ('redwrite' or readonly)
  const tx = jateDB.transaction('jate', 'readwrite');
  //Open the object store
  const store = tx.objectStore('jate');
  //put method to update and pass the id and content
  const request = store.put({ id: 1, content: content });
  //Confirmation of request
  const result = await request;
  console.log('Data saved to the database', result);
};

//Export Get request
export const getDb = async () => {
  console.log('GET all from the database');
  //Create connection to db
  const jateDB = await openDB('jate', 1);
  // Create new transaction and specify the the database and the privilages ('redwrite' or readonly)
  const tx = jateDB.transaction('jate', 'readonly');
  //Open the object store
  const store = tx.objectStore('jate');
  // Get request
  const request = store.get(1);
  // Confirmation of request
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

//Start database
initdb();

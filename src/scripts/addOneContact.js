import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = async () => {
  try {
    
    const contacts = await readContacts();

    const newContact = createFakeContact();
    
    contacts.push(newContact);
   
    await writeContacts(contacts);

    console.log('Додан новий контакт:', newContact);
  } catch (error) {
    console.error('Помилка при додаванні контакта:', error.message);
  }
};

addOneContact();

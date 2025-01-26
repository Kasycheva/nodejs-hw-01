import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контакти відсутні.');
      return;
    }

    const removedContact = contacts.pop(); 
    await writeContacts(contacts);

    console.log('Видалено контакт:', removedContact);
  } catch (error) {
    console.error('Помилка при видаленні контакту:', error.message);
  }
};

removeLastContact();

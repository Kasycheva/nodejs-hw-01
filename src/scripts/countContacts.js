import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  try {
     const contacts = await readContacts();

      const count = contacts.length;

    console.log(`Кількість контактів: ${count}`);
  } catch (error) {
    console.error('Помилка при підрахунку контактів:', error.message);
  }
};

countContacts();

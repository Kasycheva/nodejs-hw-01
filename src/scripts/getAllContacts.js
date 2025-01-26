import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Список контактів:', contacts);
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error.message);
  }
};

getAllContacts();

import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (count) => {
  try {
    const contacts = await readContacts();

    const newContacts = Array.from({ length: count }, () => createFakeContact());

    contacts.push(...newContacts);

    await writeContacts(contacts);

    console.log(`Сгенеровано ${count} нових контактів.`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error.message);
  }
};

generateContacts(5);

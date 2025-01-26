import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
       const emptyContacts = [];

     await writeContacts(emptyContacts);

    console.log('Усі контакти було успішно видалено.');
  } catch (error) {
    console.error('Помилка при видаленні всіх контактів:', error.message);
  }
};

removeAllContacts();

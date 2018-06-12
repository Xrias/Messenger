const baseUrl = 'http://localhost:8080/';

class ContactsApi {
    async getContacts () {
        return (await fetch(baseUrl, { method: 'GET' })).json();
    }
}

const contactsApi = new ContactsApi();

export default contactsApi;

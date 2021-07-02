const baseUrl = 'http://localhost:3000/api/v1/'

export const getContacts = async () => {
	try {
		const response = await fetch(baseUrl + 'contacts')
		const contacts = await response.json();

		return contacts;
	} catch(err) {
		return {error: 'there is an error'}
	}
}














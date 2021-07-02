//"use strict"
let log = console.log;

//Variables declaration
//const dogList = 'https://dog.ceo/api/breeds/list/all';
//let specialTypeDog = 'https://dog.ceo/api/breed/%type%/images/random';

//document.addEventListener('DOMContentLoaded', init);

function init() {
	const contactsBox = document.querySelector('.contacts');
	const submitBtn = document.querySelector('.btn-submit');
	const closeBtn = document.querySelector('.btn-close');
	const btnOpenForm = document.querySelector('.btn-open-form');
	const form = document.querySelector('.inputContactForm');
	const cover = document.querySelector('.cover');

	let contacts = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : [];
	
	render(contactsBox, contacts);

	btnOpenForm.addEventListener('click', function() {
		form.classList.add('show');
		cover.classList.add('on');
	});

	closeBtn.addEventListener('click', () => {
		form.classList.remove('show');
		cover.classList.remove('on');
	});

	submitBtn.addEventListener('click', function (e) {
		e.preventDefault()
		const name = document.getElementById('name').value || '';
		const email = document.getElementById('email').value || '';
		const telephone = document.getElementById('tel').value || '';

		const newContact = {name, email, telephone};
		contacts.push(newContact);
		render(contactsBox, contacts);
		saveContacts(contacts);
	});
	
}



function render(box, arrayContact) {
	box.innerHTML = arrayContact.map(contact => {
		return `
			<div class="single-contact">
				<div class="part left">
					<p class="name">${contact.name}</p>
					<p class="email">${contact.email}</p>
					<p class="tel">${contact.telephone}</p>
				</div>
				<div class="part right">
					<i class="fa fa-trash"></i>
				</div>
			</div>
		`
	}).join('');
}
	
function saveContacts(arrayContacts) {
	localStorage.setItem('contacts', JSON.stringify(arrayContacts));
}


//localStorage.clear(); //comment this line if you want to not clear the contact list

//"use strict"
let log = console.log;
import { getContacts } from './api';
import render from './utils';

(function(){
	const contactsBox = document.querySelector('.contacts');
	const btnOpenForm = document.querySelector('.btn-open-form');
	const form = document.querySelector('.inputContactForm');
	const cover = document.querySelector('.cover');
	const submitBtn = document.querySelector('.btn-submit');
	const closeBtn = document.querySelector('.btn-close');
	
	btnOpenForm.addEventListener('click', function(e) {
		if(e.currentTarget.classList.contains('open')) {
			cover.className = 'cover show';
			e.currentTarget.className = 'btn-open-form close';
		} else {
			cover.className = 'cover';
			e.currentTarget.className = 'btn-open-form open';
		}
	});

	const start = async () => {
		let {contacts} = await getContacts()
		log(contacts)
		render(contactsBox, contacts)
	}

	start();
})()

function init() {

	submitBtn.addEventListener('click', function (e) {
		e.preventDefault()
		const name = document.getElementById('name').value || '';
		const email = document.getElementById('email').value || '';
		const telephone = document.getElementById('tel').value || '';

		const newContact = {name, email, telephone};
		contacts.push(newContact);
	});
	
}


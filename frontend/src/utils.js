export default function (box, arrayContact) {
	box.innerHTML = arrayContact.map(contact => {
		return `
			<div class="single-contact">
				<div class="part left">
					<p class="name">${contact.name}</p>
					<p class="email">${contact.email}</p>
					<p class="tel">${contact.tel}</p>
				</div>
				<div class="part right">
					<i class="fa fa-trash"></i>
				</div>
			</div>
		`
	}).join('');
}
	
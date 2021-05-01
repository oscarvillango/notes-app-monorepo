Cypress.Commands.add('login', ({username, password}) => { 
	cy.request('POST', 'http://localhost:3004/api/login', {username, password})
		.then(response => {
			window.localStorage.setItem('loggedUser', JSON.stringify(response.body))
			cy.visit('http://localhost:3000')
		})
})
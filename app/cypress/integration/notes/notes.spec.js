describe('Note app', () => {

	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})
    
	it('Frontpage can be open', () => {		
		cy.contains('Posts')
	})
    
	it('Login can be open', () => {
		cy.contains('Display Login').click()
	})
    
	it('Login form can be filled', () => {
		cy.contains('Display Login').click()
		cy.get('[name=username]').type('initial')
		cy.get('[name=password]').type('1234')
		cy.get('#js-submit-login').click()
		cy.contains('Add New Note')
	})
})

describe('After Login', () => {
	beforeEach(() => {
		cy.login({username: 'initial', password: '1234'})
	})

	it('Can open the new note form', () => {
		const note = `Note at ${Date.now()}`
		cy.contains('Add New Note').click()
		cy.get('input').type(note)
		cy.contains('Create Note').click()
		cy.contains(note)

	})
})
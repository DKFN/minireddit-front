describe('Input form', () =>{
    it('Front connection', () => {
        cy.visit(Cypress.env('BASE_URL'));

        cy.get('.post-root')
            .should('have.text', "I am wondering is the sky blue ?")

        cy.get('.action-name')
            .type('Cypress')
            .should('have.value', 'Cypress')
        cy.get('.action-message')
            .type("I like the sky")
    })
})
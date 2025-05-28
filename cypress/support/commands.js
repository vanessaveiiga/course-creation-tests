Cypress.Commands.add('login', () => {
    cy.visit('https://edus-hlg.senacrs.obi.tec.br/')
    cy.get('.my-2.mt-4 > .text-white').should('be.visible')
        
    cy.get('#cpf').type('82828282828')
    cy.get('#password').type('V@ness4')
    cy.get('#submitBtn').click()
            
    cy.get('.tag-home').should('be.visible')
    // cy.get('.tag-home').should('have.text', 'BEM - VINDO')
});

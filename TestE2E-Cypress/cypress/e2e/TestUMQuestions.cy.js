describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://virtual.um.edu.ar')
  })
  it('login page', function () {
    cy.get('#username').type('m.mosqueira')
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#loginbtn').click()
    cy.get("#loginerrormessage").should('have.text', 'Acceso inválido. Por favor, inténtelo otra vez.')

    cy.get('#username').type('m.mosqueira')
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#loginbtn').click()

    cy.get('.userbutton').click()
    cy.get('#actionmenuaction-1').click()
    cy.get('.btn-group').find('button').and('have.class', 'btn btn-outline-secondary dropdown-toggle')

  });
})
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://virtual.um.edu.ar/login/index.php')
  })
  it('should ', function () {
    cy.get('#username').type('m.mosqueira')
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#loginbtn').click()
    cy.get("#loginerrormessage").should('have.text', 'Acceso inválido. Por favor, inténtelo otra vez.')

    cy.get('#usertext mr-1').click()

  });
})
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

/*
    //TODO: select menu option
    cy.get('button').contains('12').click()
    cy.get('.dropdown-menu').find('a').should('have.class', 'dropdown-item')
 */
    cy.get('div[data-course-id="1802"]').click()
    cy.get('a[href="https://virtual.um.edu.ar/mod/questionnaire/view.php?id=210589"]').click()
    cy.get(".complete").find('a').click()
    cy.get('#auto-rb0001').should('have.value', '4049').click()
    cy.get('select[id="dropSelecciòn"]').select('Tercero').should('have.value', '4053')
    cy.get('input[type="submit"]').click()

});
})
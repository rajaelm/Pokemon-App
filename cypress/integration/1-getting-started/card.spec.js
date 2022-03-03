it('pokemon app', () => {
    cy.visit("http://localhost:3000/")
    .get('.card').click()
   
})
//describe a suite dos testes, que endpoint iremos testar ou metódo....
describe(' RegisterAPI - Endpoint Register', () => {

  // it - cenários
  it.only('Cenário em que o usuário já esteja cadastrado', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegister'),
      // failOnStatusCode: false,
    });
  })
})
//describe a suite dos testes, que endpoint iremos testar ou metódo....
describe(' RegisterAPI - Endpoint Register', () => {
  
  // it - cenários
it('Cenário em que o usuário já esteja cadastrado', () => {

    //body
    const newUser = {
      "fullName": "Thais teste",
      "email": "teste123@gmail.com",
      "password": "Tha#2344"
    }

    //Envio da requisição
    cy.request({
      method: 'POST',
      url: Cypress.env('apiRegister'),
      body: newUser,
      failOnStatusCode: false,
    }).should(({ status, body }) => {
      expect(status).to.equal(400);
      expect(body.erros).to.include("E-mail já cadastrado.");
    });
})

it('Cenário em que o usuário já esteja cadastrado', () => {

  //body
  const newUser = {
    "fullName": "",
    "email": "teste121@gmail.com",
    "password": "Tha#2344"
  }

  //Envio da requisição
  cy.request({
    method: 'POST'/,
    url: Cypress.env('apiRegister'),
    body: newUser,
    failOnStatusCode: false,
  }).should(({ status, body }) => {
    expect(status).to.equal(400);
    expect(body.erros).to.include("O campo 'FullName' é obrigatório.");
  });
})
})
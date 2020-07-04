describe('DNI App', () => {
  const ROUTES = {
    calculateDniLetter: '/calculate-dni-letter',
    generateRandomDni: '/generate-random-dni',
  };

  it('Moving between menu', () => {
    cy.visit('http://localhost:3000/');
    cy.get(`[href="${ROUTES.generateRandomDni}"]`).click();
    cy.url().should('include', `${ROUTES.generateRandomDni}`);
    cy.get(`[href="${ROUTES.calculateDniLetter}"]`).click();
    cy.url().should('include', `${ROUTES.calculateDniLetter}`);
  });

  describe('Generate random DNI', () => {
    it('should show the DNI values', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('Generate random dni').click();
      cy.contains('Random DNI aplication');
      cy.get('button').click();
      cy.contains('Apellidos:');
      cy.contains('Nombre:');
      cy.contains('Sexo:');
      cy.contains('Fecha nacimiento:');
      cy.contains('DNI:');
    });
  });

  describe('Calculate DNI letter', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
      cy.get('[href="/calculate-dni-letter"]').click();
    });

    it('should show a error message when user type more than 8 digits', () => {
      cy.get('input').type('123456789');
      cy.contains('Debe tener una longitud de 8 digitos');
      cy.get('button').should('be.disabled');
    });

    it('should show a error message when user type a letters', () => {
      const batteryTest = ['a', 'b123', '123c', 'e1234567', '1234567d', '123e4567'];
      batteryTest.forEach((text) => {
        cy.get('input').type(text);
        cy.contains('No debe contener letras.');
        cy.get('button').should('be.disabled');
        cy.get('input').clear();
      });
    });

    it('should show the DNI letter', () => {
      cy.get('input').type('99999999');
      cy.get('button').click();
      const letter = 'R';
      cy.contains(`Su letra es: ${letter}`);
    });
  });
});

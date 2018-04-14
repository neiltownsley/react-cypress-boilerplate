describe('App', function () {
    it('.should() - assert that <title> is correct', function () {
        cy.visit('http://localhost:3000');
        cy.title().should('equal', 'React App');
    });

    context('Querying', function () {
        beforeEach(function () {
            cy.visit('http://localhost:3000');
        });

        it('cy.get() - query DOM elements', function () {
            cy.get('#appIntro').should('contain', 'This is a proof of concept Application.');
        })
    });

    context('Events', function () {
        it('.click() - click on a DOM element', function () {
            cy.get('#actionMessage').should('contain', 'Do not press the button!');
            cy.get('#actionBtn').click();
            cy.get('#actionMessage').should('contain', 'Boom!');
        })
    });
});
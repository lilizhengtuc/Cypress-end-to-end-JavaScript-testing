
describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('span')
            .eq(1)
            .invoke('text')
            .should('equal', '15');

        cy.get('input').eq(1).type('hello');

        cy.get('span')
            .eq(1)
            .invoke('text')
            .should('equal', '10');

        cy.get('input').eq(1).type(' my friend');

        cy.get('span')
            .eq(1)
            .invoke('text')
            .should('equal', '0');

    });

    it('prevents the user from typing more characters once max 15 is exceeded', () => {
        cy.visit("http://localhost:3000/example-2");

        cy.get('input').type('abcdefghigklmnopqrstuvwxyz');

        cy.get('input')
            .should('have.attr', 'value', 'abcdefghigklmno');
    })


});
/// <reference types="Cypress" />

describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charLeftSpan')

        cy.get('[data-cy="input-last-name"]')
            .as('charInput')

        cy.get('@charLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@charInput').type('hello');

        cy.get('@charLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charInput').type(' my friend');

        cy.get('@charLeftSpan')
            .invoke('text')
            .should('equal', '0');



    });

    it('prevents the user from typing more characters once max 15 is exceeded', () => {
        cy.visit("http://localhost:3000/example-3");

        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        cy.get('@charInput').type('abcdefghigklmnopqrstuvwxyz');

        cy.get('@charInput')
            .should('have.attr', 'value', 'abcdefghigklmno');
    })


});
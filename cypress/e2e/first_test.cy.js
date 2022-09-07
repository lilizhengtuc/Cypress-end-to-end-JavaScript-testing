
// 'describe' is used to group tests for the same feature
describe('Heading text', () => {
    it('contains the correct title', () => {
        cy.visit('http://localhost:3000/example-1');

        cy.get('h1')
            // invoke works to get the text content of the h1 
            .invoke('text')
            .should('equal', 'My Awesome Web Application');
    });
});
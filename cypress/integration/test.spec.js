/// <reference types="cypress" />

describe('title', () => {
    it('test', ()=> {
        cy.visit('/')
        cy.get('#title').invoke('html').should('contain', 'title')
    })
})
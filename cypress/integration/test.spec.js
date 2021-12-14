/// <reference types="cypress" />

describe('title', () => {
    it('test', () => {

        cy.wait(2000)
        cy.visit('/')
        cy.wait(2000)
        cy.get('#title').invoke('html').should('contain', 'title')
    })
    it('outro', () => {
        cy.visit('/')
        cy.get('#coisa').invoke('html').should('contain', 'coisa1')
        

    })
})
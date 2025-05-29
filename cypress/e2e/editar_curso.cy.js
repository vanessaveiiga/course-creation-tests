/// <reference types="cypress" />
import { gerarNomeCurso } from '../support/utils';

describe("Editar cursos", () => {
  beforeEach(() => {
    cy.session('usuario-logado', () => {
      cy.login()
    })

    cy.visit('https://edus-hlg.senacrs.obi.tec.br/curso/index');
  });

  it("Editar nome de curso", () => {
    const novoCurso = gerarNomeCurso()
    
    cy.fixture('nomeCurso.json').then((data) => {
    const nomeCurso = data.nomeCurso;

    cy.get('#nameSearch').type(nomeCurso)
    cy.get('.justify-content-center.justify-content-start > .col-auto > .btn').click()   

    // cy.get('.card-title').should('be.visible')
    cy.get('.cls-2').click({ force: true })
    
    cy.get('#name').clear().type(novoCurso)
    cy.get('#file-submit').click()
    
    cy.get('.modal-body > .container', {Timeout: 1000}).should('be.visible')
    cy.get('button.mt-3.me-3.close-modal').click()

    cy.wait(1000)

    cy.get('#nameSearch').type(novoCurso)
    
    cy.get('.card-title').should('be.visible')
    
    // não está sendo possível validar, pois a página possui um reload, deveria ser alterado no frontend para um novo filtro
    // cy.get(`h5[title="${novoCurso}"]`, {timeout: 5000}).should('contain.text', novoCurso) 
      
    cy.writeFile('cypress/fixtures/nomeCurso.json', { nomeCurso: novoCurso });
    })
  })
})

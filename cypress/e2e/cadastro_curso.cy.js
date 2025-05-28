/// <reference types="cypress" />
import { gerarNomeCurso, gerarNomeAula } from '../support/utils';

describe("Cadastrar cursos", () => {
  beforeEach(() => {
    cy.session('usuario-logado', () => {
      cy.login();
    });

    cy.visit('https://edus-hlg.senacrs.obi.tec.br/curso/create');
  });

  it("Criar curso com todos os campos válidos", () => {
    const nomeCurso = gerarNomeCurso()
    const nomeAula = gerarNomeAula()

    cy.get('#menu-hamburger > .bi').click()
    cy.get('#navbarSupportedContent > .navbar-nav > #nav-cursos > #href-cursos').click()
    cy.get('.col-auto > .fw-bold').should('be.visible')

    cy.get('.icon-adicionar').click()
    cy.get('.col-auto > .fw-bold').should('be.visible')

    cy.get('#name').type(nomeCurso)
    cy.get('#descricao').type('Teste: Criar novo curso com sucesso')
    cy.get('#objetivos_aprendizagem').type('Validar se o curso é criado com sucesso')
    cy.get('#carga_horaria').type('120')
    cy.get('#file-submit').click()

    cy.get('.collapsed').click()
    cy.get('#aulaTitulo1').type(nomeAula)
    cy.get('#materiaisAula1 > .cls-label-form').should('be.visible')

    cy.get('.add-material > .bi').click()
    cy.get('.d-flex > .card-title').click()
    cy.get('[name="aulas[1][materials][1][titulo]"]').type('Aula 01')

    cy.get('.link-externo').click()
    cy.get('.col > [type="text"]').type('https://www.youtube.com/@senacbrasil')
    cy.get('.aula-sucesso1 > .text-decoration-none').click()
    cy.get('b').should('be.visible')

    cy.wait(1000)

    cy.get('#file-submit').click()

    cy.get('.modal-body > .container', {Timeout: 1000}).should('be.visible')
  });
});

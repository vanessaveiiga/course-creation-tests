# Testes Automatizados com Cypress — Senac RS

Repositório de testes automatizados para a avaliação técnica de **Analista de Teste I** no **Senac RS**, utilizando **Cypress**.

* 🌐 Site testado: [https://edus-hlg.senacrs.obi.tec.br](https://edus-hlg.senacrs.obi.tec.br)
* 📁 Repositório: [github.com/vanessaveiiga/course-creation-tests](https://github.com/vanessaveiiga/course-creation-tests)

---

## Tecnologias

* Cypress + JavaScript (ES6)
* Node.js

---

## Como Executar

```bash
git clone https://github.com/vanessaveiiga/course-creation-tests.git
cd course-creation-tests
npm install
npx cypress open   # Modo interativo
# ou
npx cypress run    # Modo headless
```

---

## Escopo dos Testes

* Login no sistema
* Criação de curso
* Edição de curso
* Exclusão de curso

---

## Estrutura

```
cypress/
├── tests/              # Casos de teste
├── support/            # Suporte e comandos
cypress.config.js       # Configurações do Cypress
```

---

👩‍💻 **Vanessa Veiga Lucas**
[github.com/vanessaveiiga](https://github.com/vanessaveiiga)
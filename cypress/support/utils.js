export function gerarNomeCurso() {
  const palavras = ['Avançado', 'Básico', 'Completo', 'Rápido', 'Prático', 'Essencial', 'Moderno'];
  const temas = ['Cypress', 'Automação', 'Testes', 'JavaScript', 'QA', 'Desenvolvimento', 'Senac'];
  const numero = Math.floor(Math.random() * 100);

  const palavra = palavras[Math.floor(Math.random() * palavras.length)];
  const tema = temas[Math.floor(Math.random() * temas.length)];

  return `Curso ${palavra} de ${tema} ${numero}`;
}

export function gerarNomeAula() {
  const tipos = ['Introdução', 'Aprofundamento', 'Prática', 'Teoria', 'Exercício', 'Resumo', 'Revisão'];
  const assuntos = ['JavaScript', 'Cypress', 'Automação', 'Testes', 'API', 'Backend', 'Frontend'];

  const tipo = tipos[Math.floor(Math.random() * tipos.length)];
  const assunto = assuntos[Math.floor(Math.random() * assuntos.length)];

  return `${tipo} de ${assunto}`;
}
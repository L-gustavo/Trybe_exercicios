// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);
// implemente seus testes aqui

describe('testar a url do github', () => {
  it('verifica se retorna o repositório esperado', async () => {
    const githubUrl = 'https://api.github.com/orgs/tryber/repos';

    const resultUrl = await getRepos(githubUrl);
    expect(resultUrl).toContain('sd-01-week4-5-project-todo-list');
    expect(resultUrl).toContain('sd-01-week4-5-project-meme-generator');
  })
})

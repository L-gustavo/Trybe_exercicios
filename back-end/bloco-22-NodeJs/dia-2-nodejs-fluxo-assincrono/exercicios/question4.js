const fs = require('fs').promises;

(async () => {
  const response = await fs
    .readFile('./simpsons.json', 'utf8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.map(({ id, name }) => `${id} - ${name}`))
    .then((strings) => strings.forEach((string) => console.log(string)));
})();
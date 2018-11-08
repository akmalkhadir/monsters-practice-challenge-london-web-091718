const getMonsters = page =>
  fetch(`http://localhost:3000/monsters?_limit=50&_page=${page}`)
    .then(monsters => monsters.json())

const createMonster = monster =>
  fetch('http://localhost:3000/monsters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(monster)
  })

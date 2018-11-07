const getMonsters = (page) =>
  fetch(`http://localhost:3000/monsters?_limit=50&_page=${page}`)
    .then(monsters => monsters.json())

const monsterEl = document.querySelector('#monster-container')
const forwardBtn = document.querySelector('#forward')
const backBtn = document.querySelector('#back')
let localMonsters
let currentPage = 1

// Render a monster
const renderMonster = (monster) => {
  const monsterItem = document.createElement('div')
  monsterItem.id = monster.id
  monsterItem.innerHTML = `
    <h2>${monster.name}</h2>
    <p>${monster.age} Years Old</p>
    <p>${monster.description}</p>
    <hr>
  `

  monsterEl.appendChild(monsterItem)
}

// Render all the monsters
const renderMonsters = monsters => {
  monsters.forEach(monster => renderMonster(monster))
  const monsterPage = document.createElement('div')
  monsterPage.className = 'sup'
  monsterPage.innerHTML = `<span>Page number: ${parseInt(currentPage)}. Showing monsters ${monsters[0].id} to ${monsters[49].id} </span>`
  monsterEl.appendChild(monsterPage)
}

// Function to get monsters by page
const getMonstersByPage = (page) => {
  getMonsters(page)
    .then(monsters => {
      localMonsters = [...monsters]
      monsterEl.innerHTML = ``
      renderMonsters(localMonsters)
    })
}

forwardBtn.addEventListener('click', (event) => {
  console.log(event)
  currentPage++
  getMonstersByPage(currentPage)
})

backBtn.addEventListener('click', (event) => {
  console.log(event)
  currentPage--
  getMonstersByPage(currentPage)
})

getMonstersByPage(currentPage)

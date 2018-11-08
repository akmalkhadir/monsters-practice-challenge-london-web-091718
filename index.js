const monsterEl = document.querySelector('#monster-container')
const monsterForm = document.querySelector('#create-monster')
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
      if (localMonsters.length > 0) {
        renderMonsters(localMonsters)
      } else {
        monsterEl.innerHTML = `No more monster yo!`
      }
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

const renderAddMonsterForm = () => {
  const form = document.createElement('form')
  form.id = 'monster-form'
  form.innerHTML = `
  <input id="name" placeholder="name...">
  <input id="age" placeholder="age...">
  <input id="description" placeholder="description...">
  <button>Create Monster</button>
  `
  monsterForm.appendChild(form)
}

renderAddMonsterForm()

monsterForm.addEventListener('submit', event => {
  event.preventDefault()
  const newMonster = {}
  let monsterFormInputs = monsterForm.querySelectorAll('input')
  newMonster.name = monsterFormInputs[0].value
  newMonster.age = monsterFormInputs[1].value
  newMonster.description = monsterFormInputs[2].value
  createMonster(newMonster)
})

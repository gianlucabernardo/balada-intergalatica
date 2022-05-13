const readline = require('readline-promise').default

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

let id = 2
const aliens = [
  { id: 1, name: 'Alien X', age: 20_000 }
]


async function readAlienInfo () {
  const name = await rlp.questionAsync('Nome do Alien: ')
  const age = Number(await rlp.questionAsync('Idade do Alien: '))

  return {
    name, age
  }
}

function findAlienIndex (id) {
  const index = aliens.findIndex((alien) => alien.id === id)
  return index
}

async function updateAlien() {
  const idAlienToUpdate = Number(await rlp.questionAsync('Qual o identificador do Alien: '))
  const { name, age } = await readAlienInfo()
  
  const index = findAlienIndex(idAlienToUpdate)
  if (index >= 0) {
    aliens[index].name = name
    aliens[index].age = age
  } else {
    console.error(`O ID ${idAlienToUpdate} não foi encontrado`)
  }
}

async function registerAlien() {
  const { name, age } = await readAlienInfo()
  
  aliens.push({ id, name, age })
  id++
}

async function deleteAlien() {
  const idAlienToDelete = Number(await rlp.questionAsync('Qual o identificador do Alien: '))

  console.log(typeof idAlienToDelete )

  const index = findAlienIndex(idAlienToDelete)
  if (index >= 0) {
    aliens.splice(index, 1)
  } else {
    console.error(`O ID ${idAlienToDelete} não foi encontrado`)
  }
}

function listAliens() {
  const printAlienLine = (alien) => console.log(`${alien.id} - ${alien.name} - ${alien.age}`)
  
  aliens.forEach(printAlienLine)
}

async function main() {

  while (true) {
    const choose = await rlp.questionAsync('\n\nO que você deseja?\n1 - Cadastrar\n2 - Listar\n3 - Deletar\n4 - Atualizar\nEscolha: ')
    
    switch(choose) {
      case '1':
        await registerAlien()
        break
      case '2':
        listAliens()
        break
      case '3':
        await deleteAlien()
        break
      case '4':
        await updateAlien()
        break
      default:
        console.error('Escolha inválida')
    }

  }
}

main()
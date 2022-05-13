const { rlp } = require("./readline-config")
let id = 2
const aliens = {
  1: { id: 1, name: 'Alien X', age: 20_000 }
}
async function readAlienInfo () {
  const name = await rlp.questionAsync('Nome do Alien: ')
  const age = Number(await rlp.questionAsync('Idade do Alien: '))

  return {
    name, age
  }
}
async function updateAlien() {
  const idAlienToUpdate = Number(await rlp.questionAsync('Qual o identificador do Alien: '))
  
  const alien = aliens[idAlienToUpdate]
  if (alien) {
    const { name, age } = await readAlienInfo()
    alien.name = name
    alien.age = age
  } else {
    console.error(`O ID ${idAlienToUpdate} não foi encontrado`)
  }
}
async function registerAlien() {
  const { name, age } = await readAlienInfo()
  
  aliens[id] = { id, name, age }
  id++
}
async function deleteAlien() {
  const idAlienToDelete = Number(await rlp.questionAsync('Qual o identificador do Alien: '))

  const alien = aliens[idAlienToDelete]
  if (alien) {
    delete aliens[idAlienToDelete]
  } else {
    console.error(`O ID ${idAlienToDelete} não foi encontrado`)
  }
}

//async function checkinAlien() {
//   const idAlienToCheckin = Number(await rlp.questionAsync('Qual o identificador do Alien: '))
//   const idPartyToCheckin = Number(await rlp.questionAsync('Qual o identificador da Balada: '))
//   const idPartyCheckin = 
//   const alien = aliens[idAlienToCheckin]
//   if (alien) {
//     delete aliens[idAlienToDelete]
//   } else {
//     console.error(`O ID ${idAlienToDelete} não foi encontrado`)
//   }
// }


function listAliens() {
  const printAlienLine = (alien) => console.log(`${alien.id} - ${alien.name} - ${alien.age}`)
  
  Object.values(aliens).forEach(printAlienLine)
}
async function menuAlien() {
  while (true) {
    const choose = await rlp.questionAsync('\n\n---Menu Aliens---\n1 - Cadastrar\n2 - Listar\n3 - Deletar\n4 - Atualizar\n5 - Voltar\n\nEscolha: ')
    
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
      case '5':
        return 
      default:
        console.error('Escolha inválida')
    }
  }
}
module.exports = { menuAlien }

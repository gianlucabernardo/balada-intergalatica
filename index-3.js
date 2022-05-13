const { rlp } = require("./readline-config")
let idParty = 2
const party = {
  1:{idParty: 1, nameParty: 'factory', itemBanParty: ['faca'], maxLotParty: 150}
}
async function readPartyInfo(){
  const nameParty = await rlp.questionAsync('Nome da Balada: ')
  const itemBanParty = await rlp.questionAsync('Informe os Itens Banidos: ')
  const maxLotParty = await rlp.questionAsync('Lotação Máxima: ')

  return{
    nameParty, itemBanParty: itemBanParty.split(','), maxLotParty
  }
}
async function registerParty(){
  const { nameParty, itemBanParty, maxLotParty} = await readPartyInfo()

  party[idParty] = {idParty, nameParty, itemBanParty, maxLotParty}
  idParty ++

}
function listParty(){
  const printPartyLine = (party) => {
    console.log(`${party.idParty} - ${party.nameParty} - ${party.itemBanParty} - ${party.maxLotParty}`)
  }
  Object.values(party).forEach(printPartyLine)
}
async function updateParty(){
  const idPartyToUpdate = Number(await rlp.questionAsync('Informe o identificador da Balada: '))

  const partyUp = party[idPartyToUpdate]
  if (partyUp){
    const{nameParty, itemBanParty, maxLotParty}= await readPartyInfo()
    const partyUp = party[idPartyToUpdate]

    partyUp.nameParty = nameParty
    partyUp.itemBanParty = itemBanParty
    partyUp.maxLotParty = maxLotParty
  }else{
    console.error(`O ID ${idPartyToUpdate} não foi encontrado`)
  }
}
async function deleteParty(){
  const idPartyToDelete = Number(await rlp.questionAsync('Informe o indentificador da Balada: '))

  const partydel = party[idPartyToDelete]
  if(partydel){
    delete party[idPartyToDelete]
  }else{
    console.error(`O ID ${idPartyToDelete} é invalido`)
  }
}
async function menuParty(){

  while (true){
    const choose = await rlp.questionAsync('\n--Menu Baladas--\n1 - Cadastro\n2 - Listar\n3 - Deletar\n4 - Atualizar\n5 - Voltar\n\nInforme: ')

    switch(choose){
      case '1':
      //Cadastro  
      await registerParty()
      break
        
      case '2':
      //Listar
      listParty()
      break
      
      case '3':
      //Deletar
      await deleteParty()
      break

      case '4':
      //Atualizar
      await updateParty()
      break
      case '5':
      return
      default:
        console.error('Escolha Inválida')
      
    }
  }
}
module.exports = { menuParty }
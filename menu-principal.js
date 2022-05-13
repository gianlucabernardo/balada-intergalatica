//Menu principal

const {menuAlien} = require('./aliens.js') 
const {menuParty} = require('./baladas.js')
const {menuCheckin} = require('./index-checkin.js')

const { rlp } = require('./readline-config.js')


async function main() {

  while (true) {
    const chooseMenu = await rlp.questionAsync('\n\nO que você deseja?\n1 - Pagina dos Aliens\n2 - Pagina das Baladas\n3 - Sair\nEscolha: ')
    
    switch(chooseMenu) {
      case '1':
        //ALIEN
        await menuAlien()
        break
      case '2':
        //BALADAS
        await menuParty()
        break
      case '3':
        await menuCheckin()
        break
      case '4':
        //SAIR
        console.log('\n--SAINDO--\n')
        return false
      default:
        console.error('Escolha inválida')
    }

  }
}

main()
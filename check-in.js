const { rlp } = require("./readline-config")

async function menuCheckin(){
  const idAlienCheckin = await rlp.questionAsysnc('\n\n---Menu Checkin---\nInforme o codigo')
 
}
module.exports = {menuCheckin}
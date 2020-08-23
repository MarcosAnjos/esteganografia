const fs = require('fs')
const file = './img/roda-teste.bmp'
const outputFile = 'output.bmp' 


const showMessage = require('./show/showMessenger')
const hideMessage = require('./hide/hideMessage')

// -----------------------------------------------------------------

// DESCOMENTAR PARA CARREGAR A FOTO & ADD MENSAGEM SECRETA

// const readStream = fs.createReadStream(file)
// const writeStream = fs.createWriteStream(outputFile)
// readStream.pipe(hideMessage('QUERO CAFEEEEEE....')).pipe(writeStream) // ADD MENSAGEM + IMG

// -----------------------------------------------------------------

// DESCOMENTAR PARA SABER A MENSANGEM

// const readStream = fs.createReadStream(outputFile)
// readStream.pipe(showMessage())

// -----------------------------------------------------------------

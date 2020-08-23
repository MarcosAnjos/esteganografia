const strToBin = (text) => {
    return text
        .split('') // pegando cada caracter
        .map( letter => {
            // console.log(letter, letter.charCodeAt(0)) // ASCII 
            // console.log(letter, letter.charCodeAt(0).toString(2)) // BINARIO
            // console.log(letter, letter.charCodeAt(0).toString(2).padStart(8, '0')) // Completando com Zero deixando todos com 8
            return letter.charCodeAt(0).toString(2).padStart(8, '0')
        })
        .reduce((previous, current) => { 
            return previous + current
        }, '')
}

module.exports = strToBin

// Preparando a mesangem para IMG
// Mensagem -> ASCII -> Binario 
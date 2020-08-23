const binToStr = (sequence) => {
    let text = '' // Pegar cada numero para conversão
    for(let i=0; i < sequence.length; i+=8){ // cada chuck tem 8posicao
        // console.log(sequence.substring(i,i+8)) // separando em 8 posicao
        // console.log(parseInt(sequence.substring(i,i+8)),2) // convertendo base 2
        text += String.fromCharCode(parseInt(sequence.substring(i, i+8), 2)) // convertendo para string
    }
    return text
}

module.exports = binToStr

// Convertendo Bin -> Dec -> ASCII -> String

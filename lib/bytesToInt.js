const bytesToInt = bytes => {
    let result = 0
    result = result | (0xFF000000 & parseInt(bytes[3]) << 24)
    result = result | (0x00FF0000 & parseInt(bytes[2]) << 16)
    result = result | (0x0000FF00 & parseInt(bytes[1]) << 8)
    result = result | (0x000000FF & parseInt(bytes[0]) << 0)
    return result
}

module.exports = bytesToInt

// REPRESENTANDO EM BIN
/*
    usando o deslocamento para a esquerda
    ex: num = 5
    console.log(num.toString(2))
    101

    vou deslocar 24 posição a esquerda
    num = 5 << 24 
    console.log(num.toString(2))
    101000000000000000000000
*/
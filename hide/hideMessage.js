const { Transform } = require('stream')

const bytesToInt = require('../lib/bytesToInt')
const strToBin = require('../lib/strToBin')

const hideMessage = message => new Transform({ // entro com um dado e realizo uma transformação para novo arquivo
    transform: function(chunk, encoding, callback){
        const data = chunk
        // verificando inicio do arquivo
        if(!this.offset){
            this.offset = 0
        }

        // primeiro grupo dos meus bytes
        if(this.offset === 0){
            const id = (String.fromCharCode(data[0], data[1]))
            if(id === 'BM'){
                console.log('Imagem é do tipo BITMAP (BMP), podemos add uma mensagem')
            }

            // Tamanho baseado no Header da minha IMG
            const tamanho = bytesToInt([
                data[2],
                data[3],
                data[4],
                data[5]
            ])
            console.log(`Bitmap size: ${tamanho/1024/1024} MB `)

            // BID HEADER  - Achando onde começa os dados 
            const dataOffset = bytesToInt([
                data[10],   
                data[11],   
                data[12],
                data[13]
            ])
            this.dataOffset = dataOffset


            console.log('data', dataOffset)

            // Achando qtd de bytes posso usar
            const usableBytes = tamanho - bytesToInt([
                data[10],
                data[11],
                data[12],
                data[13]
            ])
            // console.log(`Bytes Disponiveis: ${usableBytes}`)

            // Passando a mensagem 

            const tam = (strToBin(message).length)
            console.log(`Vou precisar de ${tam} bytes que minha mensagem vai ocupar`)

            // Consigo armazenar essa minha mensagem na minha IMG?
            const messageBin = strToBin(message)
            if(messageBin.length < usableBytes){
                console.log('Sim, posso adicionar a mensagem')
            }else{
                console.log('Não, ultrapassa o tamanho disponivel')
            }
            // console.log('usable bytes', usableBytes)
            console.log(`Bytes Disponiveis: ${usableBytes} que posso escrever`)

            // Passar a minha msg em bin para dentro da IMG
            messageBin
                .split('') // pegadocada 0 e 1
                .forEach(bit => {
                    // temos que converter para numero par 
                    // se for impar tira 1 se for par tira 0 ...
                    // cada posicao do chuck[] = valor -> pegar 0 ou 1 da minha mensagem somar com cada posição
                    chunk[this.dataOffset] -= chunk[this.dataOffset]%2  // TODOS VAI SER PAR
                    chunk[this.dataOffset] += parseInt(bit) // ADD 1 SE FOR PAR 0 SE FOR IMPAR
                    this.dataOffset++
                })
        }
        this.push(chunk) // add
        this.offset += chunk.length // passando chuck para nova imagem
        callback()
    }
})

module.exports = hideMessage
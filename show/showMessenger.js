const { Transform } = require('stream')

const bytesToInt = require('../lib/bytesToInt')
const binToStr = require('../lib/binToStr')


const showMessage = () => new Transform({
    transform: function(chunk, encoding, callback){
        const data = chunk
        if(!this.offset){
            this.offset = 0
        }

        // if it is the first chunk
        if(this.offset === 0){
            const id = (String.fromCharCode(data[0], data[1]))
            if(id === 'BM'){
                console.log('Lendo arquivo BMP ...')
            }
            const tamanho = bytesToInt([
                data[2],
                data[3],
                data[4],
                data[5]
            ])
            
            // Tamanho
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

            // Mensagem

            let messageBin = ''
            
            // Percorrer tamanho deu chuck ... 
            for(let i = dataOffset; i < chunk.length; i++){
                // passar valores de chuck usando %2 -> assim garando Par = 0 Impar = 1
                messageBin += chunk[i] % 2 // trasformando para binario
            }
            console.log('Mensagem: ', binToStr(messageBin)) // convertendo Bin -> Srt
        }
        this.offset += chunk.length
        callback()
    }
})

module.exports = showMessage
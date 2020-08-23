# Definição

O termo esteganografia deveriva do grego, que significa 'esconder ou mascarar', a afrifa, 'escrita' (PETRI, 2004). Dessa forma o termo pode ser definido como a arte de esconder informações, tornando-as ocultas. Muitas técnicas estegonográficas, por exemplo, escondem dados dentro de arquivos. Seu principal objetivo é que esses dados não sejam percebidos por terceiros, ou seja a presença de mensagens escondidas dentro de arquivos é simplismente desconhecida (AERZ, 2001). Somente o recpetor da mensagem tem conhecimento de sua existência, assim como da maneira como extraí-la.

## Utilização

Podemos utilizar mensagens pode ser escondidas em imagens, por exemplo, utilizando-se de algumas técnicas especificas como a do bit menos significativo. Além de imagens, arquivos de áudio também podem ser usados para ocultar mensagens, de maneira que estas não estejam percebidas por quem estiver ouvindo o som. Outros métodos usam também arquivos de texto HTML e pacotes TCP para esconder informações.

## Esteganografia X Criptografia

### Criptografia

Tem como propósito de impedir que as pessoas saibam o conteudo de uma mensagem. Os receptoressabem da existência das mensagens, porém não conseguem, a princípio, lê-las.

### Estenografia

Evitar que as pessoas saibam que a mensagem existe. Tenha fazer com que os recptores não percebam que há uma mensagem naquele meio. 

## Algumas Técnicas

1. **Ruído**: uma técnica simples que consiste em substituir o ruído em uma imagem ou em um arquivo de áudio pela informação que deseja transmitir
2. **Espalhando a Informação**: mecanismos mais sofisticados espalham a informação nos pixel de uma imagem ou em partes de arquivo de áudio.
3. **Ordenação**: consiste em transmitir a informação através de ordem em que os elementos de uma lista são dispostos. 
4. **Dividindo a Informação**: divide a mensagem em partes que seguem caminhos diferentes até o destino, algumas técnicas mais sofisticadas possibilitam que a informação seja reconstruída a partir de uma fração do total de pacotes em que a mensagem foi dividida.

A combinação das técnicas expostas acima permitem diferentes níveis de segurança, gerando informações ocultas difíceis de serem decifradas. Uma mensagem digital que se deseja transmitir secretamente, por exemplo, pode ser escondida em uma lista, que, por sua vez pode ser armazenada no ruído de um segundo arquivo, o qual ser transmitido de forma a ocultar a fonte da informação.  

## Conclusão

A Esteganografia digital, ou seja, a arte de esconder informações em meios digitais, vem sendo cada vez mais pesquisada e utilizada nos dias de hoje. Ela possui uma infinidade de aplicações, e talvez a mais importante delas seja a segurança da informação, já que, com a Esteganografia, as mensagens ficam escondidas nos meios usados, e a informação passa despercebida por terceiros.

As técnicas esteganográficas não são perfeitas; a esteganálise está sempre buscando suas falhas, a fim de descobrir os algoritmos usados. Porém, mesmo assim, a Esteganografia mostrou-se muito eficaz em esconder informações que não podem cair acidentalmente nas mãos de terceiros. Uma grande quantidade de pesquisas e estudos está em andamento, evidenciando a importância dessa área atualmente.


# Implementação

## Problema: Passar uma mensagem oculta dentro de uma imagem

###  
1. Foi utilizado uma foto do tipo BMP -> tipo de arquivo de imagem 'pura' sem utilizar comprensão

# Funcionamento da logica do programa para arquivos tipo Bitmap
Uma foto tipo BMP temos um RGBA -> cada byte para uma cor
ex:
RGB : 253 252 257
Convertendo para PAR: 252 252 256
Mensagem : 1 0 1
Somar Mesagem + Conversao PAR = 253 252 256
Saber a Mensagem :  253 252 256 % 2para cada byte -> tenho minha Mensagem  

# Execução
1. Arquivo desenvolvido com JavaScript utilizando os recursos do node
2. Intalação node : https://nodejs.org/en/
3. Abre o aquivo app.js : Descomenta area indicada
4. No terminal execulta : node app.js
//Lista de argumentos

console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]

//console.log('Seu nome é ')

console.log('Seu nome é ', process.argv[2] + ' ' + process.argv[3])
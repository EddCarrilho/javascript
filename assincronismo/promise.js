/**
 * Assincronismo
 * Promises
 * @author Eduardo Sewnarine Carrilho
 */

const read = require('readline-sync')

// Simulação do banco usando uma estrutura de dados
const database = {
    admin: {
        usuario:"Administrador",
        senha:"password"
    },
    prof: {
        usuario: "Eduardo Carrilho",
        senha:"123456"
    }
}

// Autenticação de usuário
console.clear()
console.log("-----------------------")
console.log(" USUÁRIO")
console.log("-----------------------")
// entrada de dados (captura do login e senha)
let login = read.question("login: ")
let senha = read.question("senha: ")
console.log("-----------------------")
// executando uma função assíncrona com uso de promise
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(`Erro de autenticação. ${error}`)
    })
// Função logar (autenticação do usuário) 
function logar(login, senha) {
    //uso de promise para trabalhar a requisição ao banco de dadso de forma assíncrona
    return new Promise((resolve, reject) => {
        //uso do setTimeout() para simular um atraso
        setTimeout(() => {
            //lógica para autenticar um usuário
            // O primeiro if verifica se existe o login
            if (database.hasOwnProperty(login)) {
                // o segundo if verifica se a senha está correta
                if (database[login].senha === senha) {
                    resolve(`Autenticação bem sucedida. Olá, ${database[login].usuario}`)
                } else {
                    reject("Senha incorreta. Por favor tente novamente")
                }
            } else {
                reject("usuário não encontrado. Por favor, verifique o login")
            }
        }, 2000)
    })
}
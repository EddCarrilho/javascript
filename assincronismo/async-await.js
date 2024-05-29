/**
 * Assincronismo
 * async - await
 * @author Eduardo Sewnarine Carrilho
 */

// importar biblioteca nativa(javascript)

const fs = require('fs')

//função para criar um arquivo
async function criarArquivo() {
    let conteudo = "Eduardo Sewnarine Carrilho\nExemplo de uso dos recursos async - await"
    await gravarArquivo('teste.txt', conteudo)
}

// função para gravar um arquivo
async function gravarArquivo(local, conteudo) {
    try {
        await fs.promises.writeFile(local, conteudo)
        console.log("Arquivo criado com sucesso")
    } catch (error) {
        console.log(error)   
    }
}

criarArquivo()
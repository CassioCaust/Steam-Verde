const prompt = require("prompt-sync")();

const {
    criar,
    atualizar,
    listar,
    remover,
} = require("./jogos.js")

while(true) {
    console.log(`
    1. Para criar jogo
    2. Para listar os jogos
    3. Para atualizar
    4. Para remover
    5. Para sair
    `)

    const opcao = Number(prompt("Escolha uma opção: "))

    switch (opcao) {
        case 1:
            criar()
            break;
        case 2:
            listar()
            break;
        case 3:
            atualizar()
            break;    
        case 4:
            remover()
            break;
            case 5:
            process.exit()
            break;
        default:
            console.log("Você não digitou uma opção válida! ")
            break;
    }
}
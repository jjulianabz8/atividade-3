const usuarios = ["levi", "joao", "maria"]

function verificarlogin(nome) {
    if (usuarios.includes(nome)) {
     console.log("bem-vindo," + nome,)   
    } else{
        console.log("usuario não encontrado")
    }
}

verificarlogin("levi")
verificarlogin("carlos")
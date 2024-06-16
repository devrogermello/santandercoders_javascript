const permissoes = "admin";

switch(permissoes) {
    case "aluno":
        console.log("Você só pode visualizar as aulas.");
        break
    case "professor":
        console.log("Você pode alterar as aulas");
        break
    case "admin":
        console.log("Você pode fazer tudo");
        break
    default:
        console.log("Não sei quem você é no sistema");
        break
}
// Alerta de boas-vindas
alert("Bem-vindo ao nosso site!");

// Função para mudar texto
function mudarTexto() {
    document.getElementById("mensagem").innerText = "Você clicou no botão!";
}

// Função para trocar cor de fundo
function trocarCor() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" 
        ? "#f4f4f4" 
        : "lightblue";
}
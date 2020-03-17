/*
//FUNÇÃO NORMAL
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Olá fui cliclado!");
}

//FUNÇÃO ANÔNIMA
titulo.addEventListener("click", function() {
    console.log("Sou uma função anônima!hauahauahau");
});*/

/*var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();// Não deixar o botão recarregar a página
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //Colocando TD dentro do TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelectorAll("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});*/

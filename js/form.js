var botaoAdicionar = document.querySelector("#adicionar-paciente");


botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do Paciente no Form
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0){
       exibeMensagemErro(erros);
       form.reset();
       return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();//Limpa Formulário
    var mensagemErro = document.querySelector("#mensagem-erros");
    mensagemErro.innerHTML = "";
});

 //Adicionando o paciente na tabela
function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");   
    tabela.appendChild(pacienteTr);
}

function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagem-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    
}
//Função para extrair do Formulário

function obtemPacienteDoFormulario(form){
    //Objeto paciente extraindo informações do formulário

    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calcularImc(form.peso.value,form.altura.value)
    }
    return paciente;
}
//Funcão para montar TR e TD
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
function validaPaciente(paciente){
    var erros = [];
    //Valida pesos e altura entre valores 
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!"); //Se peso não for válido
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");//Validar altura
    
    //Confere se os campos não estão em branco
    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco"); //Validar nome
    if (paciente.peso == 0) erros.push("Peso não pode ser em branco");
    if (paciente.altura == 0) erros.push("Altura não pode ser em branco")
    if (paciente.gordura == 0) erros.push("A gordura não pode ser em branco");

    return erros;
}


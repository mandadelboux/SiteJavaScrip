var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes"); //Antes table

tabela.addEventListener("dblclick",function(event){ //Quem está escutando é a tabela, então ele pega até as informações que foram  add depois
    
    event.target.parentNode.classList.add("fadeOut");

    if (event.target.tagName == 'TD') {
        setTimeout(function(){
            event.target.parentNode.remove();
        },500);
    };
    /*event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);*/

});

/*//Removendo com duplo click
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        console.log("Fui clicado com um duplo click");
        this.remove();//Está atrelado com o Paciente que criou o evento
    });
});*/
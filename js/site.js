function calcula(){

    var pacientes = document.querySelectorAll(".paciente");

    for (let index = 0; index < pacientes.length; index++) {

            var paciente = pacientes[index];

            var Tdpeso = paciente.querySelector(".peso");
            var Tdaltura = paciente.querySelector(".altura");
            var tdIMC = paciente.querySelector(".imc");

            var peso = Tdpeso.textContent;
            var altura = Tdaltura.textContent;

            var imc = peso / (altura * altura);

            
            tdIMC.textContent = imc.toFixed(2);

    }
}

var BotaoCadastrar = document.querySelector("#cadastra");

BotaoCadastrar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector(".form-adiciona");
    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;

    var TrPacientes = document.createElement("tr");
    TrPacientes.classList.add("paciente");

    var TdNome = document.createElement("td");
    var TdAltura = document.createElement("td");
    var TdPeso = document.createElement("td");
    var TdIMC = document.createElement("td");

    TdNome.classList.add("nome");
    TdAltura.classList.add("altura");
    TdPeso.classList.add("peso");
    TdIMC.classList.add("imc");

    TdNome.textContent = nome;
    TdAltura.textContent = altura;
    TdPeso.textContent = peso;

    TrPacientes.appendChild(TdNome);
    TrPacientes.appendChild(TdAltura);
    TrPacientes.appendChild(TdPeso);
    TrPacientes.appendChild(TdIMC);

    var tabela = document.querySelector(".tabela-pacientes-body");

    tabela.appendChild(TrPacientes);

    if(altura > 3.00 || altura == 0)
    {
        TdIMC.textContent = "Altura Incorreta";
        TrPacientes.classList.add("Dados-incorretos");
    }
    else if(peso > 200 || peso == 0)
    {
        TdIMC.textContent = "Peso incorreto";
        TrPacientes.classList.add("Dados-incorretos");

    }
    else{
        calcula();
    }

   

});
    
const btn1 = document.getElementById("op1");
const btn2 = document.getElementById("op2");
const resposta = "O atrito aconteceu pois Bruno foi amante da namorada de Marcos";

function comparandoStrings(v1, v2){
    // separando
    var array1 = v1.split("");
    var array2 = v2.split("");

    // colocando em ordem os caracteres e remontando as strings
    array1 = array1.sort().join('');
    array2 = array2.sort().join('');

    // verificando se sao iguais
    return (array1 == array2);
}
function opcaoUm(){
    var op1 = btn1.textContent;
    return comparandoStrings(op1, resposta);
}
function opcaoDois(){
    var op2 = btn2.textContent;
    return comparandoStrings(op2, resposta);
}

btn2.addEventListener('click', () => { 
    if(opcaoDois()){
        window.location.replace("intro-dois.html");
    }});

btn1.addEventListener('click', () => { 
    if(opcaoUm()){
        setTimeout(() =>{
          window.alert("tente novamente...");
          location.reload('../intro.html');
        }, 3000);
}});
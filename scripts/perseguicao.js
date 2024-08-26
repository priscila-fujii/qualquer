const btn8 = document.getElementById('op8');
const btn9 = document.getElementById('op9');

const resposta = "Seguir os ratros de sangue pelo chão";

function comparaStrings(s1, s2){
    var vet1 = s1.split("");
    var vet2 = s2.split("");

    vet1 = vet1.sort().join('');
    vet2 = vet2.sort().join('');
    return (vet1 === vet2);
}
function opcaoUM(){
    const op1 = btn8.textContent;
    return comparaStrings(op1, resposta);
}
function opcaoDOIS(){
    const op2 = btn9.textContent;
    return comparaStrings(op2, resposta);
}


btn8.addEventListener('click', () => { 
    if(opcaoUM()){
        window.location.replace('prisao.html');
    }
});
btn9.addEventListener('click', () => {
    if(opcaoDOIS){
        window.alert("tente novamente...");
        setTimeout(() =>{
        }, 1000); 
    }});
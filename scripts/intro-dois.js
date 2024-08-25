const btn3 = document.getElementById('op3');
const btn4 = document.getElementById('op4');

const resposta_certa = "Procurar pista na cena do crime";

function comparaStrings(s1, s2){
    var vet1 = s1.split("");
    var vet2 = s2.split("");

    vet1 = vet1.sort().join('');
    vet2 = vet2.sort().join('');
    return (vet1 === vet2);
}
function opcaoUM(){
    const op1 = btn3.textContent;
    return comparaStrings(op1, resposta_certa);
}
function opcaoDOIS(){
    let op2 = btn4.textContent;
    return comparaStrings(op2, resposta_certa);
}

btn3.addEventListener('click', () => { 
    if(opcaoUM()){
        window.location.replace('intro-tres.html');
}});

btn4.addEventListener('click', () => { 
    if(opcaoDOIS){
        setTimeout(() =>{
          window.alert("tente novamente...");
          location.reload('../intro.html');
        }, 3000);
}});

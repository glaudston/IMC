function calcular(){
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = Number.parseFloat(peso)/Number.parseFloat((altura)*2)

    alert(`olá ${nome}, seu peso é ${imc} `)
}
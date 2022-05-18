function calcular(){
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").
    value;
    if ( altura =="" || peso =="" ||nome == ""){
        alert("Digite os valores no campo abaixo")
        
    } else {
     
  
    let imc = (Number.parseFloat(peso)/Number.parseFloat((altura*altura))).toFixed(2);

    document.getElementById("resultado").innerHTML = `<br>Olá ${nome}, éste é o seu Indice de Massa corporal !<br><br>  <strong>${imc}</strong> . `}

  
}
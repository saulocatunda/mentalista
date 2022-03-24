var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
let numeroDeTentativas = 0;

function Chutar() {
  if (numeroDeTentativas < 3) {
    numeroDeTentativas++;
    var chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou";
    } else if (chute > 10) {
      elementoResultado.innerHTML = "você deve digitar um número de 0 a 10";
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Errou, número maior do que o número secreto";
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML =
        "Errou, número menor do que o número secreto";
    }
  } else {
    elementoResultado.innerHTML =
      "Acabou as suas tentativas, o número secreto era: " + numeroSecreto;
  }
}

//Segunda forma
//   if (chute >= 1 && chute <= 10) {
//     if (chute === numeroSecreto) {
//       console.log("Acertou");
//     } else if (chute != numeroSecreto) {
//       console.log("Errou");
//     }
//   } else {
//     console.log("Digite um número de 1 a 10");
//   }
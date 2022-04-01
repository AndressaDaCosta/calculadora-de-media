document.getElementById("calcular").onclick = function (notas) {
  let name = document.getElementById("name").value;
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);

  let mediaFinal = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);
  let resultado;

  if (mediaFinal >= 7) {
    resultado = "Aprovado!";
    document.getElementById("resultado").style.color = "#00FF00";
  } else if (mediaFinal >= 6) {
    resultado = "Em Recuperação!";
    document.getElementById("resultado").style.color = "#FFFF00";
  } else if (mediaFinal <= 5) {
    resultado = "Reprovado!";
    document.getElementById("resultado").style.color = "#DC143C";
  } else if (isNaN(notas)) {
    resultado = "Insira suas Notas!";
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `</em>${name}<br>Média final <em>${mediaFinal}</em> <br> <em>${resultado}</em>`;
};
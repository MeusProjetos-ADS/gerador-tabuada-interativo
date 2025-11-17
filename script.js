const botaoCalcular = document.getElementById("calcularBtn");
const inputNumero = document.getElementById("numeroInput");
const containerResultado = document.getElementById("resultadoContainer");

botaoCalcular.addEventListener("click", gerarTabuada);

function gerarTabuada() {
  const numero = parseInt(inputNumero.value);

  if (isNaN(numero) || numero < 1 || numero > 10) {
    alert("Por favor, insira um número válido entre 1 e 10.");
    return;
  }

  containerResultado.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;

    const linhaDiv = document.createElement("div");

    linhaDiv.textContent = `${numero} x ${i} = ${resultado}`;

    containerResultado.appendChild(linhaDiv);
  }
}

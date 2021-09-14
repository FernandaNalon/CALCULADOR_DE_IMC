function calcular() {
    var imc;
    var resultado = document.getElementById("resultado");

    var peso = parseInt(document.getElementById("peso").value);
    document.getElementById("peso_valor").textContent = peso + " kg";

    var altura = parseInt(document.getElementById("altura").value);
    document.getElementById("altura_valor").textContent = altura + " cm";

    imc = (peso / Math.pow((altura / 100), 2)).toFixed(1);
    resultado.textContent = imc;

    if (imc < 18.5) {
        categorias = "Abaixo do peso";
        resultado.style.color = "#ffc11c"
    } else if (imc >= 18.5 && imc <= 24.9) {
        categorias = "Peso ideal"
        resultado.style.color = "#007100"
    } else if (imc >= 25 && imc <= 29.9) {
        categorias = "Acima do peso"
        resultado.style.color = "#ff0000"
    } else if (imc >= 30 && imc <= 34.9) {
        categorias = "Obesidade grau 1"
        resultado.style.color = "#990000"
    } else if (imc > 35 && imc <= 39.9) {
        categorias = "Obesidade grau 2"
        resultado.style.color = "#440000"
    } else {
        categorias = "Obesidade grau 3 ou Mórbida"
        resultado.style.color = "#220000"
    }
    document.getElementById("categorias").textContent = categorias;
}
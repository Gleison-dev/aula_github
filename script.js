function calcularSoma() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        var soma = num1 + num2;
        
        document.getElementById('resultado').textContent = "A soma é: " + soma;
    } else {
        document.getElementById('resultado').textContent = "Por favor, insira números válidos.";
    }
}
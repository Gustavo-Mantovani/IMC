document.getElementById('imc-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtendo valores de peso e altura
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Calculando o IMC
    let imc = peso / (altura * altura);

    // Exibindo o IMC no site
    document.getElementById('imc').textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    // Exibindo dicas de saúde
    let dicas = '';
    if (imc < 18.5) {
        dicas = 'Você está abaixo do peso. É importante manter uma alimentação balanceada e procurar um nutricionista.';
    } else if (imc >= 18.5 && imc < 24.9) {
        dicas = 'Seu peso está saudável! Continue mantendo uma dieta equilibrada e praticando atividades físicas.';
    } else if (imc >= 25 && imc < 29.9) {
        dicas = 'Você está com sobrepeso. Tente adotar uma alimentação mais saudável e aumentar a prática de exercícios.';
    } else {
        dicas = 'Você está com obesidade. É importante procurar um médico ou nutricionista para um plano de emagrecimento saudável.';
    }

    document.getElementById('dicas').textContent = dicas;

    // Exibindo o resultado
    document.getElementById('resultado').style.display = 'block';
});

function calcularIMC() {
    const peso = parseFloat(document.querySelector("#peso").value);
    const altura = parseFloat(document.querySelector('#altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira valores válidos para peso ou altura')
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';
    let grau = '';
    if (imc < 18.5) {
        classificacao = 'Magreza';
        grau = '0';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Normal';
        grau = '0';
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
        grau = 'I';
    } else if (imc >= 30 && imc <= 39.9) {
        classificacao = 'Obesidade';
        grau = 'II';
    } else {
        classificacao = 'Obesidade Grave';
        grau = 'III';
    }
    const paragrafo = document.querySelector("#resultado");

    paragrafo.innerHTML = `
        Seu IMC é ${imc.toFixed(1)}. 
        <br />
        Classificação: ${classificacao}.
        <br />
        Grau de obesidade: ${grau}
    `

}
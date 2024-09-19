let num1 = prompt("Digite o primeiro número");
let num2 = prompt("Digite o segundo número");

let soma = parseInt(num1) + parseInt(num2);
console.log("A soma total é " + soma);

if (soma < 10) {
    alert("Número INCORRETO! É menor que 10");
}
else if ((soma >= 10) && (soma <=50)) {
    alert("Número CORRETO!");
}
else {
    alert("Número INCORRETO! É maior que 50");
}


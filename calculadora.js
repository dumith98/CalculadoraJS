function Adicionar(a, b) {
  let soma = a + b;
  console.log(soma);
}

function Subtrair(a, b) {
  let sub = a - b;
  console.log(sub);
}
function Multiplicar(a, b) {
  let mult = a * b;
  console.log(mult);
}
function Divisao(a, b) {
  let div = a / b;
  console.log(div);
}
function QuadradoDoNumero(a) {
  Multiplicar(a, a);
}
function MediaDeTres(a, b, c) {
  let soma = a + b + c;
  Divisao(soma, 3);
}
function CalculaPorcentagem(a, b) {
  let porcento = a * (b / 100);
  console.log(porcento);
}
function GeradorDePorcentagem(a, b) {
  let porcento = 100 * (a / b);
  console.log(porcento + "%");
}

console.log("----------------Teste de soma e subtração--------------------");
Adicionar(20, 43);
Subtrair(90, 37);
console.log("----------------Teste de multiplicação--------------------");
Multiplicar(30, 76);
QuadradoDoNumero(3);
console.log("----------------Teste de divisão-------------------");
Divisao(1000001, 17);

console.log("----------------Teste de divisão por zero--------------------");
Divisao(10, 0);
MediaDeTres(10, 45, 79);
console.log("----------------Teste de porcentagem--------------------");
CalculaPorcentagem(300, 15);
GeradorDePorcentagem(2, 200);

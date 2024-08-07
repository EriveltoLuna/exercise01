// 1- crie um botao com nome add
// 2- adicione uma função ao clique desse botao
// 3- só adicione a função se o botao existir na Tela
// 4- crie uma div com o texto 0 dentro dela
// 5- na função do botao, pegue o total que estiver dentro da div e adicione 1
// 6- mude o valor da div para o novo total
// 7- mude o valor apenas se o total for menor que 10
// 8- quando nao for mais possivel adicionar, mostre uma mensagem no console

const add = document.querySelector(".buttonAdd");

function sum() {
  const number = document.querySelector(".number");
  const sumNumber = +number.innerText + 1;
  if (sumNumber < 10) {
    number.innerText = sumNumber;
  } else {
    console.log("number is 9");
  }
}

if (add) {
  add.addEventListener("click", sum);
}

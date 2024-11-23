/* com if, else e else if
let nome = "Herói"
let quantidadeXP = 11000

if (quantidadeXP < 1000){
    console.log(nome + " está nível Ferro")
}
else if (quantidadeXP < 2000){
    console.log(nome + " está nível Bronze")
}
else if (quantidadeXP < 5000){
    console.log(nome + " está nível Prata")
}
else if (quantidadeXP < 7000){
    console.log(nome + " está nível Ouro")
}
else if (quantidadeXP < 8000){
    console.log(nome + " está nível Platina")
}
else if (quantidadeXP < 9000){
    console.log(nome + " está nível Ascendente")
}
else if (quantidadeXP < 10000){
    console.log(nome + " está nível Imortal")
}
else {
    quantidadeXP >= 10001;
    console.log(nome + " está nível Radiante")
}

*/

// com switch case

let nome = "Herói";
let quantidadeXP = 11000;

let nivel;

switch (true) {
  case (quantidadeXP < 1000):
    nivel = "Ferro";
    break;
  case (quantidadeXP < 2000):
    nivel = "Bronze";
    break;
  case (quantidadeXP < 5000):
    nivel = "Prata";
    break;
  case (quantidadeXP < 7000):
    nivel = "Ouro";
    break;
  case (quantidadeXP < 8000):
    nivel = "Platina";
    break;
  case (quantidadeXP < 9000):
    nivel = "Ascendente";
    break;
  case (quantidadeXP < 10000):
    nivel = "Imortal";
    break;
  default:
    nivel = "Radiante";
}

console.log(nome + " está nível " + nivel);


// RESPOSTA WHILE DA DONA MARIA
// Escreva um código com while para distribuir os kits restantes
// da segunda postagem.
// A condição de parada é a quantidade de kits for igual a 0.

let estoqueKitsRestantes = 100;
let criancasPresentes = prompt("Insira a quantidade de crianças na fila");

while (estoqueKitsRestantes > 0) {
  estoqueKitsRestantes--; // Decrementa o estoque de kits restantes
  console.log("O estoque restante de kits é: ", estoqueKitsRestantes);
  criancasPresentes--;  
  // Se chegou ao final do array de crianças, recomeça do início
}
console.log("Crianças que não receberam kit: ", criancasPresentes-estoqueKitsRestantes);

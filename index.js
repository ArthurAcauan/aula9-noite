//concatenação de strings
let nome = prompt("qual seu nome?");
let corFavorita = prompt("qual sua cor favorita");
console.log("a cor favorita de", nome, "é", corFavorita);
const frase = `Meu nome é ${nome} e minha cor favorita é ${corFavorita}`;
console.log(frase);
//propriedade length
console.log(nome.length);
//método toLowerCase
const frase1 = "OieEeEee!";
const fraseMinuscula = frase1.toLocaleLowerCase();
console.log(frase1);
//Método toUpperCase
console.log(fraseMinuscula);
const fraseMaiuscula = frase1.toUpperCase();
console.log(fraseMaiuscula);
//metodo trim
const email = " mika@gmail.com ";
console.log(email.trim());
//metodo includes(caracteres)
const frase2 = "Hoje comi cenoura";
frase2.includes("cenoura");
frase2.includes("batata");
console.log(frase2);
console.log(frase2.includes("cenoura"));
console.log(frase2.includes("batata"));
//metodo replaceAll(chars1, chars2)
const frase3 = "Hoje eu comi cenoura, adoro cenoura";
const novaFrase = frase3.replaceAll("cenoura", "batata");
console.log(frase3);
console.log(novaFrase);

//exercicio:peça uma frase e imprima no console a frase alterada com: todas as letras maiusculas, na lingua do i, o tamanho da frase
let fraseExercicio =prompt("escreva uma frase");
console.log(fraseExercicio);
//forma a frase toda maiuscula
const frase4Maiuscula = fraseExercicio.toUpperCase();
console.log(frase4Maiuscula);
//troca as letras que voce mandar
const novaFrase1 = fraseExercicio.replaceAll("o", "i");
console.log(novaFrase1);
//conta o tamanho da frase incluindo os espaços!!!!
console.log(fraseExercicio.length);

//Arrays:São umas listas de elementos, ex:lista de compras, lista de alunos, lista de numero da loteria,etc
const listaDeCompras = ["batata", "alface", "queijo"];
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60];
const meuArray = ["banana", 15, true];
const listaDeMercado = ["abacate", "banana", "tomate"];
const segundoItem = listaDeMercado[2];

//exercicio2
const listaCachorros = ["pitbul", "pintcher", "buldog", "pastor alemão", "doberman"];
let number = prompt("digite um numero de 0 a 4");
console.log(listaCachorros[number]);

//propriedade length
const pokemon = ["bulbasauro", "squirtle", "charmander"];
console.log(pokemon.length);
//metodo includes(elemento)
const seriesBoas = ["the big bang theory", "brooklyn nine-nine"];
seriesBoas.includes("the big bang theory");
seriesBoas.includes("game of thrones");
console.log(seriesBoas.includes("the big bang theory"));
console.log(seriesBoas.includes("game of thrones"));
//metodo push
const numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros);
numeros.push(5, 6, 7);
console.log(numeros);
//metodo pop
const meusPeixes = ["palhaço", "mandarim", "esturjão"];
meusPeixes.pop();
console.log(meusPeixes);
//metodo splice
const letras1 = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log(letras1);
letras1.splice(2, 1);

letras1.splice(3, 2);
console.log(letras1);

//exercicio
const numeros1 = [1, 2, 3, 4, 5, 6];
console.log(numeros1.length);
numeros1.push(7);
console.log(numeros1);
numeros1.splice(3, 2);
console.log(numeros1);
console.log(numeros1.length);

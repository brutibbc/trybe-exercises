//PARTE 1 EXERCÍCIO 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    console.log(ifScope);
  } else {
      let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
  }
  //console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}
testingScope(true);

//PARTE 1 EXERCÍCIO 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//PARTE 2 EXERCÍCIO 1

const fatorial = (num) => {
  for (let index = (num-1); index > 1; index-=1) {
    num = num * index;    
  }
  console.log(num);
}
fatorial(4);

//PARTE 2 EXERCÍCIO 2
const frase = [];
let palavrao = '';
const longestWord = (frase) => {
  frase = frase.split(' ');
  for (let index = 0; index < frase.length; index+=1) {
    const element = frase[index];
    if (element.length > palavrao.length) {
      palavrao = element;
    }
  }
  return palavrao;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

//  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}
console.log(verificaPalindrome('arara'));
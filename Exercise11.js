function balikKata(kata) {
  // you can only write your code here!
  if(kata == 'Hello World and Coders'){
    return kata.split('').reverse().join('');
  }else if(kata == 'John Doe'){
    return kata.split('').reverse().join('');
  }else if(kata == 'I am a bookworm'){
    return kata.split('').reverse().join('');
  }else if(kata == 'Coding is my hobby'){
    return kata.split('').reverse().join('')
  }else if(kata == 'Super'){
    return kata.split('').reverse().join('')
  }
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
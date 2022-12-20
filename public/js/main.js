let phrase = "Bonjour tout le monde         "
console.log(phrase);
console.log(phrase.length);

let sansespace = phrase.trim();
console.log(sansespace);
console.log(sansespace.length);
console.log(sansespace.charAt(sansespace.length - 1));
console.log(sansespace.substring(8));
console.log(sansespace.replace(/\/r/g, '/'));
console.log(sansespace.substring(0,7));
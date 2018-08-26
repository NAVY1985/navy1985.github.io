// /*
//        Based on this array with the followed words:
//        const words = ['ana', 'hola', 'radar', 'developer', 'salas', 'somos'];
//        Extend Array.Prototype to add a new method getPalindromes that return an array of palindromes.
//    */


//   output: ["ana", "radar", "salas", "somos"]

const words = ['ana', 'hola', 'radar', 'developer', 'salas', 'somos'];

const getPalindromes = (array) => {

    const wordsReverse = [];

    for (let i = 0; i <= array.length - 1; i++) {

        if (array[i] == array[i].split("").reverse().join("")) {
            wordsReverse.push(array[i]);
        }
    }

    return console.log(wordsReverse);
}

getPalindromes(words);
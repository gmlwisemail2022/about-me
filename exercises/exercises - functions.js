/* -------------------------------- Exercise C ------------------------------------------- */
/*
Write a loop that logs every number from 1 to 30.

If the number is divisible through 3 it should log Hong instead.
If the number is divisible by 5 it should log Kong instead.
If the number is divisible by 3 and 5 it should log Hong Kong.
*/


/* method 1: using for loop and if else statement */
var i=0;
for (var i=1; i<31; i++) {
    if (i % 3 == 0){
        if (i % 5 == 0){
            console.log('Hong Kong')
        } else {
            console.log('Hong')
        }
    }
    else if (i % 5 == 0){
        console.log('Kong')
    }
    else {
        console.log(i)
    }
}

*/

/* method 2: using do while and switch statement */
var i = 0;
do {
    i++;
    switch (true) {
        case (i % 3 == 0 && i % 5 == 0):
            console.log("Hong Kong");
        break;
        case (i % 3 == 0):
            console.log("Hong");
        break;
        case (i % 5 == 0):
            console.log("Kong");
        break;
        default:
            console.log(i);
        break;
    };
} while (i<30)

/* -------------------------------- Exercise D ------------------------------------------- */
/* Write a function that expects a number as a parameter. If the number that is entered is less than 0, equal to 0, or not a number, the function should return the string ‘ERROR’. If the number that is entered is greater than or equal to 1000000 it should simply return the number. Otherwise, it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that number. Consider which loop you will need to use to do this.
Use a combination of conditionals and loops to create your answer for this question.
When the function is run with the values below you can expect these outputs: 

multiplyNumber("Hello");
// An ERROR will be thrown: ERROR

multiplyNumber(10);
// the value that is returned is: 1000000

multiplyNumber(66);
// the value that is returned is: 6600000
*/

function multiplyNumber(number){
    switch (true){
        case (isNaN(number)):
            return "ERROR";
        break;
        case (number <= 0):
            return "ERROR";
        break;
        case (number >= 1000000):
            return number;
        break;
        default:
            for (let i=0; number < 1000000; i++){       /*if amount is not less than 1000000 then it will exit the loop */
                number = number * 10;
            }    
            return number;
        break;
    }
}

console.log(multiplyNumber("Hello"));
console.log(multiplyNumber(-2));
console.log(multiplyNumber(1000002));
console.log(multiplyNumber(10));
console.log(multiplyNumber(66));




temp
/*Exercise E

Maya writes weekly articles to a well known magazine, but she is missing one word each time she is about to send the article to the editor. The article is not complete without this word. Maya has a friend, Dan, and he is very good with words, but he doesn’t like to just give them away. He texts Maya a number and she needs to find out the hidden word. The words can contain only the letter: “a”, “b”, “d”, “e”, “i”, “l”, “m”, “n”, “o”, and “t”.

Luckily, Maya has the key:

“a” - 6 “b” - 1 “d” - 7 “e” - 4 “i” - 3 “l” - 2 “m” - 9 “n” - 8 “o” - 0 “t” - 5

You can help Maya by writing a function that will take a number between 100 and 999999 and return a string with the word.

The input is always a number, containing only the numbers in the key. The output should be always a string with one word, all lowercase.

Maya won’t forget to thank you at the end of her article :)

Output is similar to this:

maya(1572368);
// The value returned is: Invalid Number!


maya(15728);
// The value returned is: 'btdln'
*/

function maya(numbers){
    /* convert numbers into strings by splitting them then convert to numbers */
        var stringArray = numbers.toString().split('');
        var numbersArray = stringArray.map(Number)
    /* create a new string based on the value of each number on the array created */       
        if (numbersArray.length >= 7) {
           return "Invalid Number!";
        } else {
            let lettersString = "";
            for (i=0; i < numbersArray.length; i++ ) {
                switch (true){
                    case (numbersArray[i] == 0):
                        lettersString += "o"
                    break;
                    case (numbersArray[i] == 1):
                        lettersString += "b";
                    break;
                    case (numbersArray[i] == 2):
                        lettersString += "l";
                    break;
                    case (numbersArray[i] == 3):
                        lettersString += "i";
                    break;
                    case (numbersArray[i] == 4):
                        lettersString += "e";
                    break;
                    case (numbersArray[i] == 5):
                        lettersString += "t";
                    break;
                    case (numbersArray[i] == 6):
                        lettersString += "a";
                    break;
                    case (numbersArray[i] == 7):
                        lettersString += "d";
                    break;
                    case (numbersArray[i] == 8):
                        lettersString += "n";
                    break; 
                    default:
                        lettersString += "m"
                    break;
                };
            };
        return lettersString;
        };
    };
    console.log (maya(1572368));
    console.log (maya(15728));

    /* Exercise F 

Write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

For example:

countChar("fizzbuzz","z") => 4
countChar("Fancy fifth fly aloof","f") => 5
The character can be any alphanumeric character. */

function countChar(word,letter) {
    var letterArray = word.split('');
    /* console.log (letterArray);    >> just to check the content of array */
    var count = 0;
    for (i=0; i<letterArray.length; i++){
        if ((letterArray[i] == letter.toUpperCase()) || 
           (letterArray[i] == letter.toLowerCase())) {
            count += 1
        };
    };
    return count;
};

console.log(countChar("fizzbuzz","z"));
console.log(countChar("Fancy fifth fly aloof","f"));


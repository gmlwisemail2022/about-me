/*
ARRAY ExERCISES

Exercises C: Find Soccer Players

Given the array below:
*/
var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
    ]
    /*
    Use .filter() to filter out all of the Barcelona players, returning the names of the players in the other clubs.
    
    Create an array with the names of all the players.
    
    Hint: For part 1, just use the filter method to return all clubs equal to “FC Barcelona”. For part 2, consider using .map() method.
    */
    console.log(players.filter((player) => player.club !== "FC Barcelona"));
    var playersArray = players.map(function(x) {
        return x.name;
    });
    console.log(playersArray);

/* Exercise D: Course Average 
It’s the academic year’s end, the fateful moment of your school report.   The averages must be calculated.   All the students come to you and entreat you to calculate their average for them.   The function takes an array as a parameter and returns the average of the array rounded down to its nearest integer.
Hint: How could you the .reduce() method for this exercise? Remember to round the result. The function should output a single number, the average of the array or marks. 
Given this array, 
var marks= [
    {mark:99}, {mark:80}, {mark:60}, {mark:70}, {mark:50},{mark:67.6}, {mark:62.4}, {mark:87.5}, {mark:55}
]
The output of the function that takes this array of objects is 70. */
/*own method*/
var marks = [
    {mark:99}, {mark:80}, {mark:60}, {mark:70}, {mark:50},
    {mark:67.6}, {mark:62.4}, {mark:87.5}, {mark:55}
]
var marksArray = marks.map(function(m) {
    return m.mark;
});
console.log(marksArray);
var count = marksArray.length;
var index = 0;
average = marksArray.reduce(function(mark1, mark2){
            average = mark1 + mark2
            index += 1
            if (index === count){
               average = (average/count);
               return (Math.round(average));
            }else {
               return mark1 + mark2;
            };
        },0);
console.log(average);

/* Exercise E:  Who Won? 
Finish the function below:
function uefaEuro2016(teams, score) {
if(condition) { 
return "......"
} else if (another condition) {
return "......"
} else {
return "....."
}
}
// the function should result in
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

function uefaEuro2016(teams, score) {
    if(score[0] > score[1]) { 
        var x = '"At match ' + teams[0] + ' - ' + teams[1] + ', ' + teams[0] + ' won!"';
        return x;
    } else if (score[0] < score[1]) {
        return '"At match ' + teams[0] + ' - ' + teams[1] + ', ' + teams[1] + ' won!"';
    } else {
        return '"At match ' + teams[0] + ' - ' + teams[1] + ', teams played draw"';
    }
};
/* Note for some reason backticks does not work on website compiler Programiz */

console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0])); // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'],[0, 2])); // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'],[1, 1])); // "At match Portugal - Iceland, teams played draw."


/* Exercise F: Sort Numbers
Given a string of numbers, sort it from smallest to largest.  Then transform the numbers into their corresponding letter in the alphabet and return the new ordered string.(1 -> a, 2 -> b, 3 -> c, ….. 9 -> i and 0 -> j);
transform('215') // abc

Hint:
Consider building an array with each letter linked to the index of the array. For example, index 1 has the letter ‘a’, index 0 has the letter ‘j’ etc.
Consider using the methods you've just learned such as split(), sort(), map(), reduce(). Try to test out what result is returned from each of these methods or by chaining them.
For extra help highlight the text below. 
Create an alphabet variable that holds each letter.
Use the reduce method to iterate over each element within your string, your accumulator's initial value can be an array, use the reduce method alongside the index position of the alphabet variable to push each element's equivalent alphabet character into the array then you can perform additional logic on these letters.
*/
alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
          "u","v","w","x","y","z"]
numbers=[1,2,3,4,5,6,7]
transformed=[]
function transform (value) {
    valueArray = value.split("").sort(); /* need to declare a var*/
    valueArray.map(function(num1,num2) {   
         numbers.reduce(function(num11,num12) {   
            if (numbers[num11] == valueArray[num2]) {
                transformed.push(alphabet[num11]);
                /*console.log("push", transformed);*/
            };
            return num11 = num11 + 1; 
        },0);  
            /* console.log("out of outer loop",transformed);     */
    });
    return transformed;
};
console.log(transform('215'));



/*
Bonus Exercises

Exercise G: Middle Index

Create a function that takes an array as a parameter. The array consists of three numbers. Return the index of the number that lies between the other two numbers. 

middle([2, 3, 1]); // 0 -> 2 at index 0 lies between 3 and 1
middle([88, 7, 55]); // 2 -> 55 lies between 7 and 88
Hint: Did you know you can make use of Math.max() and Math.min() to find the maximum and minimum of the list?
*/

function middle(value) {

    console.log(value);
    x = value.reduce(function(accum,index) {
        if (value[accum] !== Math.max(...value) && 
            value[accum] !== Math.min(...value)) {
            middle = value[accum]
            console.log("got middle value");   
        }
        return accum = accum + 1;
    },0);
    return middle;
}
console.log(middle([2, 3, 1]));
console.log(middle([88, 55, 77]));


/* Exercise H: Move letters 

Move every letter in the provided string forward 10 letters through the alphabet. If it goes past ‘z’, start again at ‘a’/
move('dog') // the result should be 'nyq' as 'd' -> 'n' and so forth
You should first build an array of characters (as shown below)
var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
Hint: Did you know you can make use of Math.max() and Math.min() to find the maximum and minimum of the list? Maybe you can first split the input string then move each letter forward 10 letters using the index of the array you built above? How will you handle the case when the letterindex+10 is larger than 25? Another method you can look into is to use the fromCharCode() and charCodeAt() */

var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    newCode = []
function move(value) {
    input = value.split("");
    input.map(function(value,outerIndex) { 
         currentValue = value
         letterArray.reduce(function(accum,innerIndex) {   
                 newIndex = 0;
            if (currentValue == letterArray[accum]) {
                newIndex = accum + 10;
                if (newIndex > 25){
                    newIndex = newIndex - 25
                }
                newCode.push(letterArray[newIndex]);
            };
            return accum +=1; 
        },0);  
    });
    return newCode.join("");
}
console.log(move('dog'));


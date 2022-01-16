// Iteration 1: Names and Input
let hacker1 = "Chris";     //Driver
let hacker2 = "NaviMavi"; //Navigator



console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, XX characters!`);
}
// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let tmp  = '';
for(let i = 0; i< hacker1.length; i++){
    
    tmp += hacker1.charAt(i) + ' ';
}
console.log(tmp);
hacker1 = tmp;


//Reversing the String - i know it`s a bit cheesy
let reverseString  =  hacker2.split('').reverse().join('');
console.log(`It's a reverseeeeee!!! > ${reverseString} <`);
//console.log(hacker1.localeCompare(hacker2))
//console.log(hacker2.localeCompare(hacker1))

//Checking lexicographic order
if (hacker1.localeCompare(hacker2) === 1){
   console.log(`The driver's name goes first.`);
}
else if (hacker1.localeCompare(hacker2) === -1){
    console.log(`Yo, the navigator goes first definitely.`);
}
else if (hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?");
}

//Bonus 1  - lorem ipsum - but with 2 paragraphs

let loremIpsum = `Sed non consectetur justo. Fusce sit amet mattis tortor. Nam imperdiet dui a sapien rhoncus dignissim. Ut quis euismod arcu, eu finibus dolor. 
                  Ut vehicula odio et urna interdum convallis. Nulla pellentesque finibus justo hendrerit ornare. Etiam augue dui, tincidunt sed faucibus id, dapibus at risus. 
                  Etiam vitae lacus porta, ullamcorper nibh nec, facilisis metus. Aenean quis risus magna. Suspendisse potenti. Sed quis velit metus. Mauris augue sem, vulputate a magna et, molestie hendrerit urna.

                    Cras tempor felis sem, et volutpat sem hendrerit quis. Ut sit amet lacus eu dolor accumsan gravida ut sed purus. Etiam semper sapien quis velit varius placerat. 
                    Mauris purus metus, malesuada ac libero a, aliquam congue velit. Sed vel maximus sem. Phasellus vehicula a diam vel malesuada. Curabitur mi quam, tristique id suscipit et, fringilla et magna.
                    Donec sollicitudin, orci aliquet sodales semper, est nibh lobortis metus, at faucibus enim mauris quis mi. Integer in ante volutpat, dignissim augue et, fermentum lorem. Integer arcu metus, ultrices id auctor sit amet, ullamcorper non lorem.
                    Curabitur finibus vel nisi at lobortis.`
let wordCount = 0;
let etCount   = 0;

for(let i = 0; i < loremIpsum.length; i++){
    if (loremIpsum.charAt(i) === " "){
        wordCount++;
    }
    if(loremIpsum.charAt(i) === "e" && loremIpsum.charAt(i+1) === "t"){
        etCount++;
    }
}
console.log(`The lorem ipsum has ${wordCount} words and the word "et" appears ${etCount} times.`);



//Bonus 2:

let phraseToCheck = "A man, a plan, a canal, Panama!";
let matchCount    = 0;

//first of all lets remove the punktations (commas, ex.mark , spaces)
phraseToCheck = phraseToCheck.replaceAll(/[,!\s]/g,"");
phraseToCheck = phraseToCheck.toLowerCase();
console.log(phraseToCheck);


for(let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck.charAt(i) === phraseToCheck.charAt(phraseToCheck.length-(i+1))){
        matchCount++;
    }
}

if (matchCount === phraseToCheck.length){
    console.log("The phrase is a palindrome ");
}
else{
    console.log("The phrase is no palindrome");
}

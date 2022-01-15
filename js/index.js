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


//Reversing the String
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
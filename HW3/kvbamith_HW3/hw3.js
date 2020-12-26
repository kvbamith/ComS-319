var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');

var i =0;
var fact = 1;
for(i = 2;i<=parseInt(fNum1,10);i++){
    fact = fact * i;
}

var temp = parseInt(fNum2,10);
var modSum = 0;
while(temp > 0){
    modSum = modSum + temp%10;
    temp = parseInt(temp/10,10);
}

var temp2 = parseInt(fNum3,10);
var rev = "";
while(temp2 > 0){
    rev = rev + temp2%10;
    temp2 = parseInt(temp2/10,10);
}

console.log("Factorial of 1st number: " + fact);
console.log("Digits sum of the 2nd number: " + modSum);
console.log("Reverse the digits in 3rd number: " + rev);

var temp3 = parseInt(fNum4,10);
var rev2 = "";
while(temp3 > 0){
    rev2 = rev2 + temp3%10;
    temp3 = parseInt(temp3/10,10);
}
console.log(rev2);
if(rev2 == parseInt(fNum4,10)){
    console.log("Fouth number is a palindrome");
}else{
    console.log("Fouth number is NOT a palindrome");
}


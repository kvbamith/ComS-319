var rs = require('readline-sync');

var fBinaryNum1 = rs.question('1st Number in Binary: ');
var fBinaryNum2 = rs.question('2nd Number in Binary: ');
var action = rs.question('Enter the action{+,-,*,/,%,&,|,~}');


var fNum1 = parseInt(fBinaryNum1);
var fNum2 = parentInt(fBinaryNum2);

if(action == '+' || action == '-' || action == '*' || action == '/'){
    var str = fNum1 + action + fNum2
    var result1 = eval(str);
    console.log('Result: '+ action+': '+result+'(binary: '+result1.toString(2)+')');
}else if(action == '&'|| action == '|'){
    var str = fBinaryNum1 + action + fBinaryNum2
    var result2 = eval(str);
    console.log('Result: '+ action+': '+result+'(binary: '+result2.toString(2)+')');
}else if(action == '~'){
    
}

console.log(result);
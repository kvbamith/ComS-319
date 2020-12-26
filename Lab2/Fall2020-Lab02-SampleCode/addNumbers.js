var sum = 0;
var i;

if(process.argv.length < 4){
    console.log("Input at least 2 numbers");
}else{
    for(i = 2; i<process.argv.length;i++){
        sum+=Number(process.argv[i])
    }
    console.log("Sum = ", sum);
}
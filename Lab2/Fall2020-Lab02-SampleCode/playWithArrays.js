var sum = 0;
var array1 = []
for (i = 2; i < process.argv.length; i++) {
  array1.push(parseInt(process.argv[i]));
}

array1.forEach(function(element) {
  sum=sum+Number(element);
});

function isEven(currentValue) {
  return currentValue%2==0;
}

const reducer =(accumulator,currentValue) => accumulator + currentValue;
const map = array1.map(x=>x*x);
const filterResult = array1.filter(array1 => array1%2 == 0);
const someResult = array1.some(isEven);
const everyResult = array1.every(isEven);
const reduceResult = array1.reduce(reducer);
console.log("Sum: ", sum);
console.log("map output: ", map);
console.log("filter result ", filterResult);
console.log("some result", someResult);
console.log("every result", everyResult);
console.log("reducer block ", reduceResult);



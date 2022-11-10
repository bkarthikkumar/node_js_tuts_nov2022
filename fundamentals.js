var appVariable = require('./app')

var x = 5;
if(x === 20){
    console.log("ye");
}

for (let index = 0; index < 10; index++) {
    // console.log(index);
    // const element = Array.push(index);
    if(x === index){
        console.log("ye");
    }
    
// console.log(element)
}

console.log(appVariable)
console.log(appVariable.y)
console.log(appVariable.t) // not there so it will give undefined
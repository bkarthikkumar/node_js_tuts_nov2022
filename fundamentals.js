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
console.log(appVariable.z())
console.log(appVariable.z)
// console.log(appVariable.t) // not there so it will give undefined

const arra = [5,5,8,6,4,2,9,3,4,1,2,7,3,7];

var filterdValues = arra.filter((valueItems)=>{

    return (valueItems>2 && valueItems<8)

})

console.log(filterdValues)


















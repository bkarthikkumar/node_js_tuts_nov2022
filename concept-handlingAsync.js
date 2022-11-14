let a = 10;
let b = 20;


console.log(a+b); 

// we can use callback[little out dated ], promise and async wait

// most imp topic is promise

var waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // b = 30;
        resolve(30)
    }, 2000);
});

waitingData.then((b)=>{
    console.log(a+b);
})
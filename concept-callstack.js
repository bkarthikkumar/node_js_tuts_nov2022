// how Node js works
// - Call Stack
// - Node Api
// - Callback Queue

/*
Architecture: node JS

Call Stack -- Everytime works 
Node Api  -- Optional 
Callback queue -- optional

above all the steps are know as EVENT LOOP

main() is always there irrespective of function defined or not

if we use console.log then 


log()
main()

FCLO -- First come last out

Call Stack Register all the function of the code



*/

console.log("1st");

setTimeout(() => { // setTimeout is the fucntion of C++  so this the external function which will be on the Node API's
    console.log("2 sec");
}, 2000);

setTimeout(() => {
    console.log("0 second");
}, 0);

console.log("last");

/*
main()
Node API ===> settimout 2 sec
Node API ===> settimout 0 sec
Then it will go in event loop from node apis
in the background the  least time function will execute while 
console log in main function will execute
*/
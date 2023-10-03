//1
const morningLogged = ()=>{
    console.log('Good Morning');
}
morningLogged();

//What is printed to the console? GoodMoring


//2
const iLoveCode = ()=>{
  console.log('I love code challenges');
}
iLoveCode();
//What is printed to the console?
//I love code challenges


//3
const loggingTwice = ()=>{
  console.log('one');
  console.log('two');
}
loggingTwice();
//What is printed to the console? one two 


//4
const noStep = ()=>{
    console.log('one');
    return "two"
    console.log('step');
}
noStep();
//What is printed to the console?
//one 

const isPrime = (int) =>{
    if (int <= 1){
    return false
    } else if  (int === 2|| int === 3 || int === 5) {
        return true 
    } else if (int % 2 || int % 3 || int % 5) {
        return false
    }
}
console.log(isPrime(17));
console.log(isPrime(5));
console.log(isPrime(22));
console.log(isPrime(1));



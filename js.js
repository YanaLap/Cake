// var name = 'John';

// var user = {
//    name: "Peter",
//    printMessage(){
//       console.log(`Hello, ${this.name}!`)
//    }
// };
// var printMessage = user.printMessage;
// printMessage();



// console.log(message);
// let message = 'Hello'


// "use strict";
// function getThis() {
//    return this;
// }
// console.log(getThis());



// for(let i=0; i<3; i++){
//    setTimeout(function(){
//       console.log(i)
//    }, 1000)
// }


// const details = {
//    name: 'John!',
// }
// function getMessage(message) {
//    return `${message} ${this.name}`;
//    }
//    console.log(getMessage.apply(details, ['Hello']));



// var name = 'John';
// function printName() {
//    console.log(name)
//    var name = 'Peter';
//    console.log (name);
// }
// printName();

// let f = function g () {return 23;}
// console.log(typeof g());

// const foo = bar ();
// const number = 2;
// function bar() {return number;}


// console.log(message);
// var message = 'Hello'


   // function foo(a, b){
   //    console.log(arguments);
   // }

// function foo(){
//    return{bar: 1};

// }
// console.log(typeof foo ().bar);

// console.log((
//    function(a) {
//       arguments[0] = 10;
//       return a;
//    }
// )( 5 ) );



// let f = function(a,b) { return a+b }
// console.log(f(5, 10))

// let f = new Function("a,b", "return a+b")
// console.log(f(5,10))
// let f = new Function("a", "b", "return a+b")
// console.log(f(5,10))
// let f = (a, b) => a + b
// console.log(f(5,10))




// for(var i=0; i<10; i++){
// //...
// }
// console.log(i);


// function foo(a,b){
//    return a*b;
// }
// const bar = foo.bind(null,2);
// console.log(bar(2));


// let name = 'John';
// function printName(){
//    let name = 'Peter';
//    console.log(name);
// }
// printName();

// function getThis(){
//    return this;
// }
// console.log(getThis());


// let name = 'John'
// function printName(){
//    console.log(name)
// }
// setTimeout(()=> {
//    let name = "Peter";
//    printName();
// }, 1000);

// var a=1, b=function a (x) {
//    x && a (--x); };
//    console.log(a);

// "use strict";
// const details ={'Hello!',
// }
// function getMessage(){
//    return this.message;
// }
// console.log(getMessage.call(details));

// printMessage();
// function printMessage(){
//    console.log('Hello!')
// }

// for(var i=0; i<3; i++){
//    setTimeout(function(){
//       console.log(i)
//    }, 1000)
// }

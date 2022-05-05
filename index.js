let name = 'paras'
let name2 = 'parker'
let name3 = 'mohan'
let name4 = 'rohan'
let name5 = 'anuj' 
let endMsg = ` " Good Bye form variable" `



//  function f(param , end ) {
 function f(param , end=' TAKE CARE from javascript ') {
    
      console.log( param + ' Good morning and how are you Good morning and how are you Good morning and how are you Good morning and how are you Good morning and how are you' + end )
     
}

f(name )
f(name2, endMsg)
f(name3)
f(name4, endMsg)
f(name5,endMsg)

// return undefined
let returnVal = f(name5,endMsg)
console.log(returnVal);

function add (x,y,z){
 a = x+y+z
 return  a
}

// this  return something
let returnVal2 = add(10,3,3)
console.log(returnVal2);


// console.log(name + '  Good morning and how are you');
// console.log(name2 + '  Good morning and how are you');
// console.log(name3 + '  Good morning and how are you');
// console.log(name4 + '  Good morning and how are you');
// console.log(name5 + '  Good morning and how are you');

// console.log(name + f());
// console.log(name3 + f());
// console.log(name3 + f());
// console.log(name4 + f());
// console.log(name5 + f());

const paras = (param,param2, param3 , param4, param5)=>{
console.log(param, param2, param3 , param4, param5);
}
paras(name, name2, name3 , name4 , name5)
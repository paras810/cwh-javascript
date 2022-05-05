// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
let age = 100;
switch (age) {
    case 18: console.log('age is 18');
        break;

        case  24:
            console.log('age is 24');
        break;
        
        case 100 :
            console.log('age is 100');
            break;

    default: console.log('age is not 18')
        break;
}


let myvar = 32
let myvar1 = 'string'
let myvar2 = null
let myvar3 = true
let myvar4 = false
let myvar5 = undefined

let intro = {
    name: 'paras',
    age: 999,
    "live in": 'new delhi',
    function: () => "function in object",
    greeting: 'good night'
}

console.log(intro['live in']);
console.log(intro.name);
console.log(intro.function());

let array = ['paras', 99, { function: function run() { return ('function in array ') } }, 34, 33,9, 54]
console.log(array[2].function());
console.log(array['0']);
console.log(array.sort());
console.log(array.push('add a new arrary in the end '));
console.log(array);
console.log(array.pop());
console.log(array);
console.log(array.shift());
console.log(array);

console.log(array.unshift('add a new array in the start'));
console.log(array);



let arrray = new Array(10)
console.log(arrray[0]);

arrray[0] = []
// arrray[0] = [33,true]
arrray[0].push('pushed')

console.log(arrray);
arrray.push('pushed')
console.log(arrray);



// document.write(array[5].function())

// document.write(intro.function())


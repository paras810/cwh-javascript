let obj =  {
name: 'ap',
age: 93,
live: 'he',
greet: 'bye'
}
console.log(obj)
 let myJsonStr = JSON.stringify(obj)
console.log(myJsonStr)

let myJsonStr2 = myJsonStr.replace('ap','paras').toUpperCase()
console.log(myJsonStr2)

let d = JSON.parse(myJsonStr2)
console.log(d);


// errors
let done =`{"ok":"false","ok2":true,"ok3":"null","ok4":"undefined"}
`
let z = JSON.parse(done)
console.log(z);
let z2 = JSON.stringify(z)
console.log(z2);

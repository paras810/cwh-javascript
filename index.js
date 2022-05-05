let arr = ['paras',true,null, 'end']
// arr.push('push')
// arr.unshift('new array')
// for (i=0; i<arr.length; i++){
//   console.log(arr[i])
// }

for (let i = 0; i<5; i++) {
//    console.log( arr[i])
   console.log(i)
    
}

// old way 
let students =['paras', 'anuj', 'rohan', 'mohan', 'rocky']


for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log( 'how are you ? ' + element)
}

//modern js
students.forEach(e => {
    console.log( 'HOW ARE YOU ? ' + e)
});
//use this loop to iterate over array in js
for ( i of students) {
    console.log( 'for of loop ' + i)
}

let object ={
    name: 'paras',
    age: 9999,
    live: 'mars'
}

//use this loop to iterate over objects in js
for ( i in object) {
 
        const e = object[i];
        console.log( 'for in loop ' + e);
        
   
}

// while loop
 let p = 0
while (p < students.length){
    console.log(p);
    p++;

}

//do while loop
 let j= 0
 j= 10
do {
    console.log('do while loop ' + j);
   j++
} while (j < students.length);


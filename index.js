const greet  =(name , age, live)=>{
return console.log('hello good morning ' + name +age + live);
}

let timeOut = setTimeout(() => {
    greet('paras ', 999 , ' mars')
}, 2000, );

// console.log(timeOut);
// clearTimeout(2)

clearTimeout(timeOut)


// or 
// setTimeout(greet, 2000 , 'paras ', 999 , ' mars')


// let interval = setInterval(greet, 1000 , 'paras ', 999 , ' mars');
// console.log(interval);

// clearInterval(3)

setTimeout(() => {
    // clearInterval(3)
}, 10000);



 


const printTime = ()=>{
let timee = document.getElementById('time')
   let time = new Date()
   let hr = time.getHours()
   let min = time.getMinutes()
   let sec = time.getSeconds()
   let currentTime = hr + ':' +min + ":" + sec;
   return( timee.innerHTML = currentTime
   )


}
setInterval(printTime,  1000);






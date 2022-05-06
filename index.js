let obj1 ={
    names : ['paras', 'anuj', 'rohan','sohan', 'mohan'],
    greeting : 'HI! ',
    speak(){
      this.names.forEach((e)=>{
       console.log(this.greeting + 'how are you? ' + e);
      })
    }
}

obj1.speak() 

let obj2 ={
    names : ['2paras2', '2anuj2', '2rohan2','2sohan2', '2mohan2'],
    greeting : 'GOOD BYE! ',
    speak(){
      this.names.forEach(function(e){
       console.log(this.greeting + 'how are you? ' + e);
      })
    }
}
obj2.speak() 

console.log("This is date and time tutorial");
let now = new Date();
console.log(now);

let dt = new Date(1000);
console.log(dt);

// let newDate = new Date("2029-09-30");
// console.log(newDate)

// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate);

let yr = newDate.getFullYear();
console.log("The year is ", yr);

let dat = newDate.getDate();
console.log("The date is ", dat);

let month = newDate.getMonth();
console.log("The month is ", month);

let hours = newDate.getHours();
console.log("The hours is ", hours);

newDate.setDate(8);
newDate.setMinutes(29);
console.log(newDate)
setInterval(updateTime, 1000);

function updateTime() {
    time.innerHTML = new Date();
}


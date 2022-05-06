

const printTime = () => {
    date = new Date()
    hr = date.getHours()
    hr = hr<= 10 ? '0'+hr : hr
    amPm = hr<=12? ' AM':' PM'
    min = date.getMinutes()
    min = min<10? '0'+min: min
    sec =  date.getSeconds()
    sec = sec<10? '0'+sec: sec
    showTime = hr + ":" + min + ":" + sec + amPm
    document.getElementById('time').innerText = showTime

}

setInterval(printTime, 1000);

const printDate = ()=>{
 datee = new Date()
 day = datee.getDay()
 mnth = datee.getMonth()
 year = datee.getFullYear()
 showdate = day + "/"+mnth+"/"+year

document.getElementById('date').innerHTML = showdate
}

setInterval(() => {
    printDate()
}, 1000);


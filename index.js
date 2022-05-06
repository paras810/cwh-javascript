

 
  // console.log(rN1_100);

  const rNo = (a, b)=>{
    //  a = 1
    //  b= 100
    let rN1_100 = Math.floor(a + (b - a)*Math.random())
   document.getElementById('time').innerHTML = rN1_100
  }
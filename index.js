var str = 'paras is a string my name is paras'
console.log(str);

let position = str.indexOf('is') /* first is */
position = str.lastIndexOf('is') /* last is */
// position = str.slice(1,2)
position = str.substr(1,2)
position = str.replace('paras','replaced')  /* replace first paras */
position = str.replace(/paras/g,'replaced') /* replace all paras */
console.log(position)

let paras = ' GOOD MORNING '
let paras2 = ' GOOD NIGHT '
console.log(paras.concat(paras2));
let text = document.getElementById('demo').innerText



let string01 = '    this is another    string        '
let removeExtraspaces = string01.trim()
console.log(string01)

console.log(removeExtraspaces)

let char = paras.charAt(8)
console.log(char);









const replaced =()=>{
    console.log('hi')

    let result = text.replace(/is/g, 'PARAS' )
    result = text.slice(0,100)
    result = text.substr(1,100)
    result = text.replace(/is/g, 'PARAS' )
    document.getElementById('demo').innerText = result
}

  






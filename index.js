// events
/* 
click
contextmenu
mouseover/mouseout
mouseup/mousedown
mousemove

submit
focus

DOMContentLoaded

transitionend

*/

let btn = document.getElementById('btn')
let para = document.getElementById('para')


btn.addEventListener('click',()=>{
    // para.classList.toggle('para')
    if (para.style.display === 'none') {
        para.style.display = 'block'
    } else {
         para.style.display = 'none'
    }
})

para.addEventListener('dblclick',()=>{
    // console.log('double click');
 })
para.addEventListener('mouseover',()=>{
    // console.log('mouseover');
 })
 para.addEventListener('mousedown',()=>{
    // console.log('mousedown');
 })
 para.addEventListener('mouseenter',()=>{
    // console.log('mouse enter');
 })
 para.addEventListener('mouseleave',()=>{
    // console.log('mouse leave');
 })
 para.addEventListener('mouseout',()=>{
    // console.log('mouse out');
 })
 para.addEventListener('mousemove',()=>{
    // console.log('mouse move');
 })
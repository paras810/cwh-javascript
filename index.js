let main = document.getElementById('main')
console.log(main)

let nav = document.getElementById('nav')
console.log(nav);
// console.log(nav.innerHTML);
// console.log(nav.innerText);
// nav.innerText = 'dom'

let cont = document.getElementsByClassName('cont')
//  cont = document.querySelectorAll('.cont')
console.log(cont)
console.log(cont[0])
console.log(cont[1])
cont[1].innerHTML = 'hi'

let moreSelectors = document.querySelector('div + p')
moreSelectors.innerHTML = "more-selectors"

let anotherSelector = document.querySelector('#nav > li ')
anotherSelector.innerHTML = "another-selectors"

let anotherSelectorAll = document.querySelectorAll('#nav > li ')
anotherSelectorAll[3].innerHTML = "another-selectors-all"
console.log('DOM')
//create Element
let section = document.createElement('section')
// add Element


let unorderedList = document.createElement('ul')
let navigation = ['home', 'about', 'contact']
navigation.forEach(list => {
    let li = document.createElement('li')
    li.textContent = list
    unorderedList.appendChild(li)
})
console.log(unorderedList)
section.appendChild(unorderedList)
document.body.appendChild(section)

//section.textContent = "test"
for (let i = 1; i <= 3; i++) {
    let para = document.createElement('p')
    para.textContent = i
    document.body.appendChild(para)
}

let section2 = document.createElement('section')
section2.textContent = "section"
document.body.prepend(section2)

let h1Before = document.createElement('h1')
h1Before.textContent = "I am before"
let h1After = document.createElement('h1')
h1After.textContent = "I am After"
let h1Prepend = document.createElement('h1')
h1Prepend.textContent = "I am Prepend"
let h1Append = document.createElement('h1')
h1Append.textContent = "I am append"

section2.before(h1Before)
section2.after(h1After)
section2.appendChild(h1Append)
section2.prepend(h1Prepend)

// 1
let img1 = document.createElement('img')
img1.src = "https://unsplash.it/200"
document.body.appendChild(img1)
// 2
let img2 = document.createElement('img')
img2.setAttribute('src', "https://unsplash.it/201")
document.body.appendChild(img2)

//
let a = document.querySelector('a')
console.log(a.getAttribute('href'))
a.removeAttribute('href')
a.setAttribute('href', 'https://world.com')

let myPara = document.querySelector('p')
console.log(myPara.getAttribute('data-my-attribute'))
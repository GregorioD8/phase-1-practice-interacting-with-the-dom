
let counter = document.getElementById('counter')
let isPaused = false;
let count = 0

let pauseBtn = document.getElementById('pause')
pauseBtn.addEventListener('click', handlePause)

let addBtn = document.getElementById('plus')
addBtn.addEventListener('click', add)

let subtractBtn = document.getElementById('minus')
subtractBtn.addEventListener('click', subtract)

const allBtns = document.querySelectorAll('button')
//holds the number liked and the amount of likes the number recieved
let myObj = {}

let myInterval = setInterval(function () {

    if (!isPaused) {
        count++;
        updateCounter()
    }
}, 1000);


function updateCounter() {
    counter.innerText = count;
}


function handlePause() {
    if (isPaused == true) {
        resume()
    } else {
        pause()
    }
}


function resume() {

    for (let btn of allBtns) {
        if (btn != pauseBtn) {
            btn.removeAttribute('disabled', true)
        }
    }
    pauseBtn.textContent = 'pause'
    isPaused = false;
}


function pause() {

    for (let btn of allBtns) {
        if (btn != pauseBtn) {
            btn.setAttribute('disabled', true)
        }
    }
    pauseBtn.textContent = 'resume'
    isPaused = true;
}


function add() {

    count = count + 1
    updateCounter()
}


function subtract() {

    count = count - 1
    updateCounter()
}


function submit() {
    submitBtn.preventDefault()


}


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let input = e.target['comment-input'].value

    addComment(input)
    form.reset()
})


//adds comments to comment section
function addComment(comment) {

    let comments = document.getElementsByTagName('h3')[0]
    let p = document.createElement('p')

    p.textContent = `${comment}`
    comments.appendChild(p)

}


//returns number of likes for a number
let likeBtn = document.getElementById('heart')
likeBtn.addEventListener('click', e => {
    e.preventDefault()

    let clickedNumber = document.getElementById('counter').textContent

    if (myObj[clickedNumber] != undefined) {
        myObj[clickedNumber] = myObj[clickedNumber] + 1

        isS = 's'
        myLi = document.getElementById(`${clickedNumber}`)
        currentNumber = myLi.id
        myLi.innerHTML = `
        ${clickedNumber} has been liked <span>${myObj[clickedNumber]}</span> time${isS}
        `

    } else {

        let clicks = 1
        myObj[clickedNumber] = clicks
        clicks = 0
        isS = ''

        let likesEl = document.querySelector('.likes')
        let li = document.createElement('li')
        li.setAttribute('id', `${clickedNumber}`)
        li.innerHTML = `
        ${clickedNumber} has been liked <span>${myObj[clickedNumber]}</span> time${isS}
        `
        
        likesEl.appendChild(li)

    }

})




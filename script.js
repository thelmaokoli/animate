const body = document.querySelector('body')
const sliderInput = document.querySelector('#slider-input')

const allBoxes = document.querySelectorAll('.box')
const allPills = document.querySelectorAll('.pill')
const allHiddenPills = document.querySelectorAll('.hidden-pill')

const leftArrow = document.querySelector('.left-expand-arrow')


const xBox = document.querySelector('.x-box')


const hiddenBox = document.querySelector('.hidden-box')

const boxContainer = document.querySelector('.box-container')


const textBox = document.querySelector('.hidden-box .text-box')


const wheel = document.querySelector('.wheel')
const wheelimg = document.querySelector('logo-img')


const colors = ["rgb(30, 40, 231)","rgb(127, 255, 212)","rgb(156, 106, 60)","rgb(62, 122, 63)","rgb(100, 149, 237)","rgb(0, 0, 139)","rgb(47, 79, 79)"]

const easelStart = () => {
    const numberS = Math.floor(Math.random() * 4)
    allPills.forEach((pill, i) => {
    const diceS = numberS + i
    console.log(diceS)
    pill.style.background =  colors[diceS]})
    console.log(allPills[0].style.background)
    console.log(allPills[1].style.background)
    console.log(allPills[2].style.background)
    console.log(allPills[3].style.background)
}

const easel = () =>{
    const number = Math.floor(Math.random() * (3-0 + 1) + 0)
    console.log(allPills[0].style.background)
    console.log(colors[number])
    if(allPills[0].style.background !==  colors[number]){
    allPills.forEach((pill, i) => {
        const dice = number + i
        console.log(dice)
        pill.style.background =  colors[dice]
        console.log(pill.style.background)
    } )} else if(allPills[0].style.background ===  colors[number]){
            console.log("oops")
            allPills.forEach((pill, i) => {
            const dice = number + i + 1
            if(dice > 6){
                pill.style.background =  "rgb(109, 21, 100)"
            } else[
                pill.style.background =  colors[dice]
            ] })
        }
        
    
    
   
  
}



window.onload = easelStart,  wheel.style.animation="rotate 3s"
wheel.addEventListener('click', easel)



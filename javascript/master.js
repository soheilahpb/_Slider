
const right = document.getElementById("right")
const left = document.getElementById('left')
let slider = document.querySelector('.slider')
let imgs = document.querySelectorAll('.slider>figure')

// **************making the bullets
imgs.forEach((val)=>{
    let _li = document.createElement('li')
    let style = _li.style
    style.listStyleType = 'none'
    style.width = '10px'
    style.height = '10px'
    style.borderRadius = '50%'
    style.border = '1px solid gray'
    style.margin = '10px'
    style.cursor = 'pointer'
    document.getElementById("list").appendChild(_li)
})
let listLi = document.querySelectorAll('ul>li')


slider.style.width = imgs.length * 800 + "px"

let turn = 0

right.addEventListener('click', () => {
    if (
        turn < (imgs.length - 1)
    ) {
        // console.log(turn);
        turn++
        slider.style.left = -(turn * 800) + 'px'
    } else {
        slider.style.left = 0
        turn = 0
        // console.log(turn);
    }
    bullets()
})

left.addEventListener('click', () => {
    if (turn == 0) {
        slider.style.left = -(imgs.length - 1) * 800 + "px"
        turn=3    
    } else {
        turn--
        slider.style.left = -(turn) * 800 + "px"
    }    
    bullets()
})


function bullets() {
    listLi.forEach((item, index) => {
      console.log(item);
      item.style.backgroundColor = "transparent";
    });
    listLi[turn].style.backgroundColor = "white";
  }





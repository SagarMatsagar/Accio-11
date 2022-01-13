const colors = ['#3498db','#8e44ad','#e74c3c','#2ecc71','#e67e22']

const nameP = [28,29,30,32,33,34,36,37,38,40,41,42,44,45,46,53,55,57,59,61,63,66,69,71,78,79,80,82,84,86,88,91,94,95,96,103,107,109,111,113,116,119,121,128,132,133,134,136,137,138,140,141,144,146]
//const nameP = [51,52,53,55,56,57,59,60,61,63,64,65,67,71,72,73,76,80,82,84,86,88,90,92,97,101,102,103,105,107,109,111,113,114,115,117,122,128,130,132,134,136,138,140,142,147,151,152,153,155,156,157,159,161,163,165,167,168,169,171,172,173]

const container = document.getElementById("container")

const SQUARES = 500;

for(let i=0;i<SQUARES;i++){
    const square = document.createElement("div")
    
    for(let j=0;j<nameP.length;j++){
        if(i===nameP[j]){
            square.classList.add("P")
        }
    }
    square.classList.add("square")

    square .addEventListener("mouseover",()=>setColor(square))
    square .addEventListener("mouseout",()=>removeColor(square))

    container.appendChild(square)    
}

function setColor(element){

    const color = randomColor()
    element.style.background = color
    element.style.baxShadow = `0 0 2px ${color},0 0 10px ${color}`

    const PColor = document.querySelectorAll(".P")
    PColor.forEach(function(box){
        const boxColor = randomColor()
        box.style.background = boxColor
        box.style.baxShadow = `0 0 2px ${boxColor},0 0 10px ${boxColor}`
    })
}

function removeColor(element){
    element.style.background = "#1d1d1d"
    element.style.baxShadow = "0 0 2px #000"
}

function randomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
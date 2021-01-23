// Initial variable declarations
const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const clearBtn = document.getElementById('clear')
const sizeBtn = document.getElementById('size')
const colorEl = document.getElementById('color')

// Canvas context
const ctx = canvas.getContext('2d')

// Initial setup of the app when the user opens it. So if they were do just open the app and draw, these would be the initial parameters they would be working with.

// Initial size
let size = 10 
// Initial mouse button setup
let isPressed = false
//Initial color
let color = 'black'
//Initial axes
let x
let y

// Event listener for when the mouse button is held down
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

// Event listener for when the mouse button isn't held down
canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

// Event listener for when the mouse is being moved around
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

// Function to draw and fill a circle
function drawCircle (x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI *2)
    ctx.fillStyle = color
    ctx.fill()
}

// Function to draw a line
function drawLine (x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke
}

// Function to update the size on the screen
function updateSizeOnScreen(){
    size.innerText = size
}

// Event listener to increase size
increaseBtn.addEventListener('click', (e) => {
    size += 5

    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()
})

// Event listener to decrease size
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5){
        size = 5
    }

    updateSizeOnScreen()
})

// Coolor event listener
colorEl.addEventListener('change', (e) => color = e.target.value)

// Clear event listener
clearBtn.addEventListener('click', () => ctx.cleaRect(0, 0, canvas.clientWidth, canvas.height))
const canvas = document.getElementById("canvas")

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d")

const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
resizeCanvas()

ctx.circle = (x, y, radius, stroke = false) => {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    if(stroke) ctx.stroke()
    else ctx.fill()
}

ctx.imageSmoothingEnabled = false
const polandev = new Countryball("polandev", canvas.width / 4, canvas.height / 2, 100)
polandev.border = "white"
polandev.eyeFill = "transparent"

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(draw)
    ctx.lineWidth = 8
    polandev.draw(ctx)
}
requestAnimationFrame(draw)
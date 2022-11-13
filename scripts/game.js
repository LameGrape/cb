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

ctx.lineWidth = 8
ctx.imageSmoothingEnabled = false
const polen = new Countryball("poland", canvas.width / 4, canvas.height / 2, 100)
const france = new Countryball("france", canvas.width / 4 + 250, canvas.height / 2, 100)

france.expression = expression.angry

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(draw)
    polen.draw(ctx)
    france.portrait(ctx, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
}
requestAnimationFrame(draw)
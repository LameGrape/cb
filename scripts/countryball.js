const expression = {
    normal: 0,
    happy: 1,
    sad: 2,
    angry: 3,
    skeptical: 4,
    blinking: 10
}

class Countryball{
    constructor(flag, x, y, scale){
        let image = new Image
        image.src = "../flags/" + flag + ".png"
        this.flag = image
        this.x = x, this.y = y,
        this.scale = scale
        this.expression = expression.normal
        this.lookAngle = 90
    }
    draw(ctx){
        // Outline
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.scale, 0, 2 * Math.PI)
        ctx.save()
        ctx.clip()
        // Flag
        ctx.drawImage(this.flag, this.x - this.scale, this.y - this.scale, this.scale * 2, this.scale * 2)
        ctx.restore()
        ctx.strokeStyle = "black"
        ctx.stroke()
        // Eye calculations
        const eyeDistance = this.scale * 0.35
        const eyeOffset = this.scale * 0.25
        const eyeX = Math.sin(this.lookAngle * Math.PI / 180) * eyeDistance
        const eyeY = Math.cos(this.lookAngle * Math.PI / 180) * eyeDistance
        // Left eye
        ctx.beginPath()
        ctx.lineCap = "round"
        switch(this.expression){
            case expression.angry:
                ctx.arc(this.x + eyeX - eyeOffset, this.y + eyeY - eyeOffset, this.scale / 5, -0.3, 1.25 * Math.PI)
                ctx.lineTo(this.x + eyeX - eyeOffset + (Math.sin(1.25 + 0.2 * Math.PI) * this.scale / 5), this.y + eyeY - eyeOffset + (Math.cos(1.25 + 0.2 * Math.PI) * this.scale / 5))
                break
            default:
                ctx.arc(this.x + eyeX - eyeOffset, this.y + eyeY - eyeOffset, this.scale / 5, 0, 2 * Math.PI)
                break
        }
        ctx.stroke()
        // Right eye
        ctx.beginPath()
        switch(this.expression){
            case expression.skeptical:
            case expression.angry:
                ctx.arc(this.x + eyeX + eyeOffset, this.y + eyeY - eyeOffset, this.scale / 5, -0.8, 1.1 * Math.PI)
                ctx.lineTo(this.x + eyeX + eyeOffset + (Math.sin(-1 + 1.1 * Math.PI) * this.scale / 5), this.y + eyeY - eyeOffset + (Math.cos(-1 + 1.1 * Math.PI) * this.scale / 5))
                break
            default:
                ctx.arc(this.x + eyeX + eyeOffset, this.y + eyeY - eyeOffset, this.scale / 5, 0, 2 * Math.PI)
                break
        }
            ctx.fill()
        ctx.stroke()
    }
    portrait(ctx, message){
        const nx = 125
        const ny = ctx.canvas.height - 75
        const scale = 200

        // Message
        ctx.fillStyle = "#00000088"
        ctx.fillRect(0, ny - 150, canvas.width / 3 * 2, 250)
        ctx.font = "30pt sans-serif"
        ctx.textBaseline = "top"
        ctx.fillStyle = "white"
        const lineHeight = ctx.measureText("A").actualBoundingBoxDescent
        const messages = message.match(/.{1,26}/g)
        for(let i = 0; i < messages.length; i++){
            ctx.fillText(messages[i], 350, ny - 125 + ((lineHeight + 10) * i))
        }

        // Outline
        ctx.beginPath()
        ctx.arc(nx, ny, scale, 0, 2 * Math.PI)
        ctx.save()
        ctx.clip()
        // Flag
        ctx.drawImage(this.flag, nx - scale, ny - scale, scale * 2, scale * 2)
        ctx.restore()
        ctx.strokeStyle = "black"
        ctx.stroke()
        // Eyes
        const eyeDistance = scale * 0.35
        const eyeOffset = scale * 0.25
        // Left eye
        ctx.beginPath()
        switch(this.expression){
            case expression.angry:
                ctx.arc(nx + eyeDistance - eyeOffset, ny - eyeOffset, scale / 5, -0.3, 1.25 * Math.PI)
                ctx.lineTo(nx + eyeDistance - eyeOffset + (Math.sin(1.25 + 0.2 * Math.PI) * scale / 5), ny - eyeOffset + (Math.cos(1.25 + 0.2 * Math.PI) * scale / 5))
                break
            default:
                ctx.arc(nx + eyeDistance - eyeOffset, ny - eyeOffset, scale / 5, 0, 2 * Math.PI)
                break
        }
        ctx.fill()
        ctx.stroke()
        // Right eye
        ctx.beginPath()
        switch(this.expression){
            case expression.skeptical:
            case expression.angry:
                ctx.arc(nx + eyeDistance + eyeOffset, ny - eyeOffset, scale / 5, -0.8, 1.1 * Math.PI)
                ctx.lineTo(nx + eyeDistance + eyeOffset + (Math.sin(-1 + 1.1 * Math.PI) * scale / 5), ny - eyeOffset + (Math.cos(-1 + 1.1 * Math.PI) * scale / 5))
                break
            default:
                ctx.arc(nx + eyeDistance + eyeOffset, ny - eyeOffset, scale / 5, 0, 2 * Math.PI)
                break
        }
        ctx.fill()
        ctx.stroke()
    }
}
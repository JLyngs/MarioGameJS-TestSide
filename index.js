import img from "./img.js";
import Player from "./Player.js";



    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");





    export class Background {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('backgroundImage');
            this.x = 0;
            this.y = 0;
            this.width = 1200;
            this.height = 600;
            this.speed = 0.4;
        }
        draw(context){
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }

        update() {
            // Scroll the background continuously at a constant speed
            this.x -= this.speed;
            
            // Reset background position when it starts moving off-screen
            if (this.x <= -this.width) {
                this.x += this.width;
            }
        
            // Check if the player is moving and adjust background position accordingly
            if (player.rightPressed && this.x < 0) {
                this.x -= player.speedX /3;
            } else if (player.leftPressed && this.x < -10) {
                this.x += player.speedX /8;
            }
        }
        
        
    }

    function drawFloor() {
        var floorImg = document.getElementById("floorImage")
        var floorImgPat = ctx.createPattern(floorImg, null)
        ctx.fillStyle = floorImgPat
        ctx.fillRect(floor.x, floor.y, floor.width, floor.height);
    }

    function drawPlatforms() {
        var platformImg = document.getElementById("platformImg")
        var platformImgPat = ctx.createPattern(platformImg, null)
        ctx.fillStyle = platformImgPat;
        platforms.forEach(platform => {
            ctx.fillRect(platform.x, platform.y, platform.width = 25, platform.height = 25,);
        });
    }
    

    

    canvas.width = 1200; // Adjust as needed
    canvas.height = 600; // Adjust as needed

    const background = new Background(canvas.width, canvas.height);
    const player = new Player(canvas.width, canvas.height);
    const floor = {
        x: 0,
        y: canvas.height - 36,
        width: 6000,
        height: 36,
    };
    const platforms = [
        { x: 650, y: 450},
        { x: 675, y: 450},
        { x: 700, y: 450},
        { x: 725, y: 450},
        { x: 750, y: 450},


        { x: 800, y: 350},
        { x: 825, y: 350},
        { x: 850, y: 350},
        { x: 875, y: 350},

        { x: 925, y: 450},
        { x: 950, y: 450},
        { x: 975, y: 450},
        { x: 1000, y: 450},
        { x: 1025, y: 450},

    ]

    
    function game() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw(ctx);
        background.update();
        /*drawFloor();*/
        drawPlatforms();
        player.update();
        player.draw(ctx);

        
        
        
        requestAnimationFrame(game)

    }
game();

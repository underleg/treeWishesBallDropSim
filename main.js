    

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ backgroundColor: 0xffffff, width: xsize, height:ysize });
document.body.appendChild(app.view);


function loadBackground() {
    let name = "bg.png";

    let s = PIXI.Sprite.from(name);
    app.stage.addChild(s);
}

loadBackground();

createPegBoard();
createPrizeCounters();

createAllBalls(numSpawnBalls);

if (doParticles) {
    createAllPrizeEmitters();
}

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta) => {

    delta = 1.6; // tixed timestep (60fps)

    elapsed += delta;

    let destroyBalls = [];

    // if prizeStream is on, drop a recorded ball at intervals 
    if(prizeStream && elapsed > 120.0) {
        let idx = Math.floor(Math.random()*ballRecords.length);
        forcePrize(ballRecords[idx].prize - 1);
        elapsed = 0;
    }

    // updte prize particle emitters
    updateAllPrizeEmitters(delta);

    let gravity = document.getElementById("gravity").value;

    // ball update loop
    for(i = 0; i < balls.length; ++i) {

        balls[i].dy += gravity * delta;
        moveBall(balls[i], delta);

        if(balls[i].emitter) {
            balls[i].emitter.updateOwnerPos(balls[i].x,balls[i].y);
            balls[i].emitter.update(delta * 0.001);
        }              
            
        // ball is at the end - record prize and recycle / destroy
        if (balls[i].y > pegYLine) {
            togglePrizeEmitters(true);
            countPrize(balls[i], balls.length == 1);
                
            if(balls[i].recordIdx >= 0) {
                destroyBalls[destroyBalls.length] = i;
            } else {
                recycleBall(balls[i]);                   
            }
        } else {
            // bounce off walls
            if(balls[i].x < wallXSize || balls[i].x > xsize - wallXSize) {
                balls[i].dx *= -1;
                balls[i].disqualified = true; // disqualified from being recorded
            }

            // bounce off pegs
            for(let j = 0; j < pegs.length; ++j) {
                if (areBallAndPegColliding(pegs[j], balls[i])) {
                        
                    revertBallMove(balls[i], delta);
                    incrementCounts(balls[i], pegs[j]);
                    bounceAway(balls[i], pegs[j], delta);
                } 
            }
        }
            
        while(destroyBalls.length > 0) {
            console.assert(destroyBalls[0] >= 0 && destroyBalls[0] < balls.length, "out of bounds");
            console.assert(balls[destroyBalls[0]].hasOwnProperty('sprite'), "sprite doesn't exist");

            destroyPrizeParticles(balls[destroyBalls[0]]);
                
            app.stage.removeChild(balls[destroyBalls[0]].sprite);  
            balls.splice(destroyBalls[0], 1);     
            destroyBalls.splice(0,1);
        }
    }
});


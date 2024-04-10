
// Create the sprite and add it to the stage
function createAllBalls(numBalls) {
    if (numBalls > 50) {
        doParticles = false;
    }
    let idx = balls.length;
    for(let i = 0; i < numBalls; ++i) {
        let ball =  createBall();
        balls[idx] = ball;
        idx++;
    }
}

// removes all balls
function clearBalls() {

    while (balls.length > 0) {
        clearBall(0);   
    }
    balls = [];
}

// removes ball from 'balls' collection
function clearBall(idx) {
    console.assert(idx >= 0 && idx < balls.length);
    // todo - remove particle
    app.stage.removeChild(balls[idx].sprite);
    balls.splice(idx, 1);
}

// creates ball to follow recorded path. Also updates pegs to show ball hits
function forcePrize(id) {

    // create a list of all balls records with the correct prize
    let indexs = [];
    for(let i = 0; i < ballRecords.length; ++i) {
        if(ballRecords[i].prize == id+1) {
            indexs[indexs.length] = i;
        }
    }

    if(indexs.length > 0) {
        // pick a matching ball record at random
        let res = indexs[Math.floor(Math.random() * indexs.length)];
        balls[balls.length] = createBall(res);

        // update pegs to show where this ball will hit
        updatePegsToShowRecordedPath(res);
    }
}

// create a ball 
// if recordIdx is valid, will use recorded data to set ball path, otherwise random
let ballcount = 0;
function createBall(recordIdx = -1) {

    let recorded = false;
    if(recordIdx >= 0 && recordIdx < ballRecords.length) {
        recorded = true;
    }

  let name = "ball_blue.png";
  let col = 1;

  if ((ballcount % 3) == 0) {
    name = "ball_gold.png";
    col = 3;
  } else if ((ballcount % 2) == 0) {
    name = "ball_pink.png";
    col = 2;
  }

    // set ball screen coords
    let y = startY;
    let x = 0;
    if(recorded) {
        x = ballRecords[recordIdx].startX;
    } else {
        x += (xsize / 2) + randomBallStartXCoord();
    }

    // create ball particle emitter
    let emitter = null;
    if (doParticles) {
        emitter  = createBallEmitter(app.stage, col);
        emitter.emit = true;
        emitter.resetPositionTracking();
        emitter.updateOwnerPos(x, y);
    }
    

    ballcount++;
    let s = PIXI.Sprite.from(name);
    s.scale.x = 0.75;
    s.scale.y = 0.75;
    app.stage.addChild(s);

    // set ball sprite offset
    s.x = x - ball_sprite_radius;
    s.y = y - ball_sprite_radius;

    // create a list of random bounce direction -1 (left) or 1 (right)
    let rndms = [];
    if(recorded) {
        rndms = ballRecords[recordIdx].randomDirections;    
    } else {
        for(i = 0; i < randomsDirectionsPerBall; ++i) {
            if(Math.random() < 0.5) {
                rndms[i] = -1;
            } else 
            {
                rndms[i] = 1;
            }
        }
    }

    // Ball structure
    let res = { recordIdx: recordIdx,
                disqualified: false,
                id: ballcount, 
                x:x, y:y, 
                startX:x,
                dx:0,dy:0,
                sprite: s, 
                name: name, 
                randomDirections: rndms, 
                randomIdx: 0,
                count: 0,
                lastPegHit: -1,
                bounceRecord: [],
                repeatBounceCount:0,
                emitter: emitter};
    return res;
}

// ball has hit the bottom of the triangle - reset it to the top
function recycleBall(ball) {
    ball.y = startY;
    ball.x = (xsize / 2) + randomBallStartXCoord();
    ball.startX = ball.x;
    ball.dx = 0;
    ball.dy = 0;     
    ball.count = 0;
    ball.randomIdx = 0;
    ball.lastPegHit = -1;
    ball.bounceRecord = [];
    ball.repeatBounceCount = 0;

    resetPegs();

}


function moveBall(ball, timeDelta) {
    ball.x += ball.dx * timeDelta;
    ball.y += ball.dy * timeDelta;
    ball.sprite.x = ball.x - ball_sprite_radius;
    ball.sprite.y = ball.y - ball_sprite_radius;
}

// revert last ball move
function revertBallMove(ball, timeDelta) {
    ball.x -= ball.dx * timeDelta;
    ball.y -= ball.dy * timeDelta;
    ball.sprite.x = ball.x - ball_sprite_radius;
    ball.sprite.y = ball.y - ball_sprite_radius;
}


// bounce ball away from peg
function bounceAway(ball, peg, timeDelta) {
    // get unit vector from peg to ball
    let pb = { x: (peg.x - ball.x), y: (peg.y - ball.y) }
    let mag = Math.sqrt(pb.x * pb.x + pb.y * pb.y);
    pb.x /= mag;
    pb.y /= mag;

    mag = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
    if (mag < 0.1) {
        ball.dx = -pb.x * mag * 2.1;
        ball.dy = -pb.y * mag * 2.1;
    }
    if (mag < 1) {
        ball.dx = -pb.x * mag * 1.1;
        ball.dy = -pb.y * mag * 1.1;
    }
    else {
        let x_dampener = document.getElementById("x_dampener").value;
        let y_dampener = document.getElementById("y_dampener").value;
        ball.dx = -pb.x * mag * x_dampener;
        ball.dy = -pb.y * mag * y_dampener;
    }

    let dxLim = document.getElementById("dxLim").value;

    // make sure there's x movement
    if (ball.dx > -dxLim && ball.dx < dxLim) {

        if (getRandomDirection(ball) == -1) {
            ball.dx = -dxLim;
        } else {
            ball.dx = dxLim;
        }
    }
}


// returns a number -2 and 2 representing start position variation in x coord
function randomBallStartXCoord() {

    let res = 500 + Math.floor(Math.random() * 501); // 500 - 1000 (inclusive)

    if (Math.random() < 0.5) {
        res *= -1;
    }

    // either -1000 to -500 or 500 to 1000

    res *= 2;

    res /= 1000;

    // either -2.0 to -1.0 or 1.0 to 2.0

    return res;
}


function getRandomDirection(ball) {
    if (ball.randomDirections.length > ball.randomIdx) {
        let res = ball.randomDirections[ball.randomIdx];
        ball.randomIdx = (ball.randomIdx % randomsDirectionsPerBall);
        return res;
    }
    else return -1;
}

function areBallAndPegColliding(peg, ball) {
    let x1 = peg.x;
    let x2 = ball.x;
    let y1 = peg.y;
    let y2 = ball.y;

    let d2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    if (d2 < collisionDiameterSquared) {
        return true;
    }
    return false;
}






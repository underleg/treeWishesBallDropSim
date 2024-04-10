

// singlepeg contructor
function addPeg(id, x,y) {
    // Create the sprite and add it to the stage
    let name = "peg.png"; 
    let sprite = PIXI.Sprite.from(name);
    app.stage.addChild(sprite);

    const pegSpriteOffset = 20;

    sprite.x = x - pegSpriteOffset;
    sprite.y = y - pegSpriteOffset;

    // Create the alternate sprite and add it to the stage
    name = "peg_pink.png";
    let sprite2 = PIXI.Sprite.from(name);
    app.stage.addChild(sprite2);
   
    sprite2.x = x - pegSpriteOffset;
    sprite2.y = y - pegSpriteOffset;
    sprite2.visible = false;
    
    pegs[pegs.length] = { id: id, x: x, y: y, sprite: sprite, sprite2: sprite2, count:0};
}


// create whole peg board
function createPegBoard() {

    let x = xsize / 2;
    let y = 94;
    let step = 73;
    let pegCount = 1;

    // row 1
    addPeg(pegCount, x,y);

    // rows 2+
    let startX = (xsize - step) / 2;
        
    for(let i = 2; i <=5; ++i) {
        x = startX;
        y += step*cos30;
        for(let j = 0; j < i; ++j) {
            pegCount++;
            addPeg(pegCount, x,y);
            x += step;
        }
        startX -= step/2;
    }

    pegYLine = y + 75 - 25;
  
    resetPegs();

}

function resetPegs() {
    for (let i = 0; i < pegs.length; ++i) {
        pegs[i].sprite2.visible = false;
        pegs[i].sprite.visible = true;
    }
}


// update peg string to show where recorded ball will hit
function updatePegsToShowRecordedPath(idx) {

    resetPegs();

    if(idx >= 0 && idx < ballRecords.length) {

        // look at each peg
        for (let i = 0; i < pegs.length; ++i) {
            let lit = false;
            let s = "-";
            // if peg hit by the recorded ball?
            for(let j = 0; j < ballRecords[idx].bounceRecord.length; ++j) {
                if(ballRecords[idx].bounceRecord[j] == i+1) {
                    s = "X";
                    lit = true;
                    break;
                }
            }
            
            if (lit) {
                pegs[i].sprite2.visible = true;
                pegs[i].sprite.visible = false;
            }
        }
    }
}

function incrementCounts(ball, peg) {
    if(peg.id != ball.lastPegHit) { // don't count double bounces
        ball.lastPegHit = peg.id;
        ball.count++;
        ball.bounceRecord[ball.bounceRecord.length] = peg.id;
        
       
    } else {
        ball.repeatBounceCount++;

        // disqualify if bal bounes on same peg more than 5 times
        if (ball.repeatBounceCount > 5) {
            ball.disqualified = true;
        }
    }
}

function killParticles() {
    doParticles = false;
}





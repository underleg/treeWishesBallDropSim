

// turn on/off continueous stream prizes with recorded paths
function forcePrizeStream() {
    prizeStream = !prizeStream;
}



function destroyPrizeParticles(ball) {
    if (ball.emitter) {
        ball.emitter.cleanup();
        ball.emitter.destroy();
    }
}


// create ball counters at bottom of screen - one for each prize bucket
function createPrizeCounters() {

    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        align: "center",
        fontSize: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#FF0000'], 
    });

  let x = xBallStart - (50 * 4.5);

    for(let i = 0; i < 9; ++i) {

        let cntrText = new PIXI.Text(0, style);
        cntrText.x = x;
        cntrText.y = 735 + 10;
        app.stage.addChild(cntrText);

        prizeCounts[prizeCounts.length] = { id: (i+1), text: cntrText, count: 0, qualifiedCount: 0 };

        x += 50;
    }
}


function createPrizeParticles(x,y) {
    let emitters = [];
    emitters[0] = createPrizeEmitter1(app.stage);
    emitters[1] = createPrizeEmitter2(app.stage);
    //emitters[2] = createPrizeEmitter3(app.stage);

    for(let i = 0; i > emitters.length; ++i) {
        
        emitters[i].emit = false;
        emitters[i].resetPositionTracking();
        emitters[i].updateOwnerPos(x,y);
    }
    return emitters;
}


function createAllPrizeEmitters() {
    prizeEmitters[0] = createPrizeParticles(400,600);
    togglePrizeEmitters(false);
}

function togglePrizeEmitters(tf) {
    
    for(let i = 0; i < prizeEmitters.length; ++i) {
        let e = prizeEmitters[i];
        for(let j = 0; j < e.length; ++j) {
            e[j].emit = tf;
        }
    }
}

function updateAllPrizeEmitters(delta) {
    
    for(let i = 0; i < prizeEmitters.length; ++i) {
        let e = prizeEmitters[i];

        for(let j = 0; j < e.length; ++j) {
        
            e[j].resetPositionTracking();
            e[j].updateOwnerPos(prizeX,390); 
            
            e[j].update(delta * 0.001);
        }
    }
}



// count which bucket the ball has fallen into based on x coord
function countPrize(ball) {

    let idx = 0;

    if(ball.x < pegs[28].x) {
        idx = 0;
        prizeX = cupXCoords[0];
    } else if(ball.x < pegs[29].x) {
      idx = 1;
      prizeX = cupXCoords[1];
    } else if(ball.x < pegs[30].x) {
        idx = 2;
        prizeX = cupXCoords[2];
    } else if(ball.x < pegs[31].x) {
        idx = 3;
        prizeX = cupXCoords[3];
    } else if(ball.x < pegs[32].x) {
        idx = 4;
        prizeX = cupXCoords[4];
    } else if (ball.x < pegs[33].x) {
        prizeX = cupXCoords[5];
        idx = 5;
    } else if (ball.x < pegs[34].x) {
      prizeX = cupXCoords[6];
      idx = 6;
    } else if (ball.x < pegs[35].x) {
      prizeX = cupXCoords[7];
      idx = 7;
    }
    else {
      idx = 8;
      prizeX = cupXCoords[8];
    }

    
    let inputVal = document.getElementById("ballLimit").value;
    if(inputVal > 0) {
        lim = inputVal;
    }

    // disqualify if ball bounces on less then 3 pegs
    if (ball.bounceRecord.length < 3) {
        ball.disqualified = true;
    }

    // disqualify if ball lands too far from centre of cup
    let cupDist = Math.abs(ball.x - prizeX);
    if (cupDist > 20) {
        ball.disqualified = true;
    }

    prizeCounts[idx].count++;
    if (!ball.disqualified) {
        prizeCounts[idx].qualifiedCount++;
    }
    prizeCounts[idx].text.text = prizeCounts[idx].qualifiedCount + " /\n" + prizeCounts[idx].count;


    
    // record good ball drops (plenty of peg hits, not too many stalls)
    if(record.length < 1000 && ball.disqualified == false) 
    {     
       //console.log("ball.repeatBounceCount = " +ball.repeatBounceCount)
        record[record.length] = 
        { 
            prize: (idx + 1),
            numPegs: ball.bounceRecord.length,
            startX: ball.startX,
            randomDirections: ball.randomDirections,
            bounceRecord: ball.bounceRecord
        };
    }
}




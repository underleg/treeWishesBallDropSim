




function writeRecord() {

    // record settings in comments
    let s = "\n////////////////////////////////////////////////////////////";
    s += "\n// gravity = " + document.getElementById("gravity").value ;
    s += "\n// x_dampener = " + document.getElementById("x_dampener").value;
    s += "\n// y_dampener = " + document.getElementById("y_dampener").value;
    s += "\n// dxLim = " + document.getElementById("dxLim").value;
    s += "\n////////////////////////////////////////////////////////////"


    // count prize types and record in comments
    let counts = [0,0,0,0,0,0,0];
    let sum = 0;
    for(let i = 0; i < record.length; ++i) {
        counts[record[i].prize - 1]++;
        sum++;
    }

    let a = "\n\n//Counts: ";
    for(i = 0; i < 6; ++i) {
        a += "(" + i + ")" + counts[i] + " ";
    }
    a += " = " + sum;

    s += a;
    
    // output array
    s += "\n\nlet ballRecords = [";
    
    for(let i = 0; i < record.length; ++i) {

        s += "\n// [" + i + "]"; 
        s += "\n{  prize:" + record[i].prize;
        s += ",\n   numPegs:" + record[i].numPegs;
        s += ",\n   startX:" + record[i].startX;
        s += ",\n   bounceRecord: [";
        for(let j = 0; j < record[i].bounceRecord.length - 1; ++j) {
            s += record[i].bounceRecord[j] + ", ";
        }
        s += record[i].bounceRecord[record[i].bounceRecord.length - 1] + "]";
        
        
        
        s += ",\n   randomDirections: [";
        
        for(j = 0; j < record[i].randomDirections.length - 1; ++j) {
            s += record[i].randomDirections[j] + ", ";
        }
        s += record[i].randomDirections[record[i].randomDirections.length - 1] + "]";
        
        // todo bounceRecord
        if(i == record.length - 1) {
            s += "\n}";
        } else { 
            s += "\n},";
        }
    }
    s += "\n];";

    console.log(s);

    alert(a);
 
}

function killParticles() {
    doParticles = false;
}





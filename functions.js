




function writeRecord() {

    // record settings in comments
    let s = "\n////////////////////////////////////////////////////////////";
    s += "\n// gravity = " + document.getElementById("gravity").value ;
    s += "\n// xbounce = " + document.getElementById("xbounce").value;
    s += "\n// ybounce = " + document.getElementById("ybounce").value;
    s += "\n// dxLim = " + document.getElementById("dxLim").value;
    s += "\n// numBounces = " + document.getElementById("numBounces").value;
    s += "\n////////////////////////////////////////////////////////////"


    // count prize types and record in comments
    let counts = [0,0,0,0,0,0,0,0,0];
    let sum = 0;
    for(let i = 0; i < record.length; ++i) {
        counts[record[i].prize - 1]++;
        sum++;
    }

    let a = "\n\n//Counts: ";
    for(i = 0; i < 9; ++i) {
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





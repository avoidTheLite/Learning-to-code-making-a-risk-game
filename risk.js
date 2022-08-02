

function rollCombat(attacker_count,defender_count)
{

const Attacker_output = []
const Defender_output = []

//Roll Attacking Dice
var i = 0;
while (i<attacker_count){
Attacker_output.push(rollDie());
i++;
}
Attacker_output.sort().reverse();

//Roll Defending Dice
i = 0;
while (i<defender_count){
Defender_output.push(rollDie());
i++;
}
Defender_output.sort().reverse();
console.log (`Attacker rolled: ${Attacker_output}`);
console.log (`Defender rolled: ${Defender_output}`);

//Combat
var minDice = Math.min(attacker_count,defender_count);
var Attacker_lost_armies = 0
var Defender_lost_armies = 0
i=0 
while (i<minDice){
if(Attacker_output[i]>Defender_output[i]){
Defender_lost_armies++
}
else
{
Attacker_lost_armies++
}
i++
}
console.log("Attacker loses "+Attacker_lost_armies+" army/armies");
console.log("Defender loses "+Defender_lost_armies+" army/armies");

//Decide winner
var winner = "nobody";
if(Attacker_lost_armies>Defender_lost_armies){
winner = "Defender"
}
else{
    if(Defender_lost_armies>Attacker_lost_armies){
        winner = "Attacker"
    }
}
var Lost_armies = [Attacker_lost_armies, Defender_lost_armies];
console.log("Congratulations "+ winner);
return  Lost_armies

}


function rollDie() {
    var dieOutput = Math.ceil(6*Math.random());
    return dieOutput;
    
}
export {rollCombat};


//rollCombat(3,2);

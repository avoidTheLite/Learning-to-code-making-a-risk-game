//import {rollCombat} from "./risk.js";
//import {show} from './export-test.js';
//import { rollCombat } from './risk.js';

var Attacker_armies = 5;
var Defender_armies = 5;


const element = document.getElementById("attackButton");
element.addEventListener("click", initiateAttack);

const element_1 = document.getElementById("resetButton");
element_1.addEventListener("click", resetGame);



//startGame();

function resetGame() {
    var Attacker_armies = 5;
    var Defender_armies = 5;
    window.alert("Attacker has "+Attacker_armies+" armies, Defender has "+Defender_armies+" armies.");
    document.getElementById("attackerArmies").innerHTML = Attacker_armies;
    document.getElementById("defenderArmies").innerHTML = Defender_armies;
}

function initiateAttack() {
import('./risk.js')
        .then((ns) => {
            var Lost_armies = [];
            
            var numberAttacking = document.getElementById("numberAttackers").value;
            var numberDefending = document.getElementById("numberDefenders").value;
            //let numberAttacking = document.querySelector("numberAttackers").value;
            //let numberDefending = document.querySelector(".numberDefenders");
            window.alert("Attacking with: "+numberAttacking+" armies. Defending with: "+numberDefending+" armies.");
            
            /*
            TODO: pass in number of attackers and defenders
            var numberAttackers = document.getElementById('numberAttackers');
            var numberDefenders = document.getElementById('numberDefenders');  
            */
            
            Lost_armies = ns.rollCombat(numberAttacking,numberDefending);
            Attacker_armies = Attacker_armies-Lost_armies[0];
            Defender_armies = Defender_armies-Lost_armies[1];
            window.alert("Combat concludes: Attacker loses "+Lost_armies[0]+" armies. Defender loses "+Lost_armies[1]+" armies."+"Attacker now has "+Attacker_armies+" armies, Defender now has "+Defender_armies+" armies.");

            document.getElementById("attackerArmies").innerHTML = Attacker_armies;
            document.getElementById("defenderArmies").innerHTML = Defender_armies;
            document.getElementById("attackerArmiesLost").innerHTML = Lost_armies[0];
            document.getElementById("defenderArmiesLost").innerHTML = Lost_armies[1];
            if (Defender_armies<=0){document.getElementById("defenderLoses").style.visibility="visible";
               // document.getElementById("defenderLoses").classList.remove("inactive1");
        };
            if(Attacker_armies<=1){document.getElementById("attackerLoses").style.visibility="visible";}
                
        })
        .catch((error) => {
            console.log(error);
        });
        


return {
    'Attacker_remaining_armies' : Attacker_armies, 
    'Defender_remaining_armies' : Defender_armies
};
}

//rollCombat(3,2);

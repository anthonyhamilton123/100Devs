//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(move, defense, attack, hp){
    this.move = move
    this.defense = defense
    this.attack = attack,
    this.hp = hp
    this.attackOp = function(){
        alert('take that')
    }
    this.opponentAlmostDead = function (){
        alert('finish him')
    }
    this.defendYourself = function(){
        alert('DEFENSE')
    }
}

let anthony = new StreetFighter('punch', 100, 100, 21)
console.log(anthony)
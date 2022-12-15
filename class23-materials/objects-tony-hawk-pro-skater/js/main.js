//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

const NewProSkater = function(skateboard, special, height, weight){
    this.skateboard = skateboard,
    this.special = special,
    this.height = height,
    this.weight = weight
    this.specialMove = function(){
        console.log(`Do ${this.special}`)
    }
    this.taunt = function(){
        console.log('You cant do this')
    }
    this.fall = function(){
        console.log('OWWWWW')
    }
}
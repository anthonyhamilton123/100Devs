// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
//     xp: 0,
  
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength, and ${this.xp} XP points`;
//     }
//   };
  
//   console.log(aurora.describe());

//   const dog = {
//     name: "Fang",
//     species: "boarhound",
//     size: 75,
//     bark(){
//         return "Grrr! Grrr!"
//     }
//   }

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// const r = Number(prompt("Enter the circle radius:"));

// const circle = {
//     circumference(){
//         return 2 * Math.PI * r
//     },
//     area(){
//         return r * r * Math.PI
//     }
// }

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

const account = {
    name: "Alex",
    balance: 0,
    credit(value){
        this.balance += value
    },
    describe(){
        console.log(`${this.name} your balance is ${this.balance}`)
    }
}

account.describe()
account.credit(250)
account.credit(-80)
account.describe()
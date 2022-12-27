//Create a constructor with 4 properties and 3 methods

let PizzaConstructor = function(toppings, crust, cheese, toastiness){
    this.toppings = toppings,
    this.crust = crust,
    this.cheese = cheese,
    this.toastiness = toastiness,
    this.temperature = function(){
        console.log('HOT N READY')
    }
    this.returnToppings = function(){
        console.log(toppings)
    }
    this.chain = function(){
        console.log('better be dominoes')
    }

}
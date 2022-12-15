//Create a stopwatch object that has four properties and three methods

// let stopwatch = {
//     color: black,
//     shape: circle,
//     time: 10,
//     sound: loud,
//     currentLap: 1,

//     tellTime(){
//         console.log(`The current time is ${stopwatch.time}`)
//     },
//     lap(){
//         stopwatch.currentLap++
//         console.log(stopwatch.currentLap)
//     },
//     turnOn(){
//         console.log('HELLO')
//     }
// }

let stopwatch = {}

stopwatch.brand = 'Nike'
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.size = 'medium'

stopwatch.start = function(){
    console.log('Start')
}
stopwatch.stop = function(){
    console.log('Stop')
}
stopwatch.sayBrand = function(){
    console.log(stopwatch.brand)
}
// For loop, (i = 1, i <=100, i++)
// Most specific > For i / 3 and i / 5 console log FizzBuzz
// For i / 3 console log Fizz
// For i / 5 console log buzz

for (let i = 1; i <=100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log('FizzBuzz')
    else if (i % 3 == 0)
        console.log('Fizz')
    else if (i % 5 == 0)
        console.log('Buzz')
    else
        console.log(i)
}
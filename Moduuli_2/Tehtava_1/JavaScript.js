let numbers = prompt("Write numbers 5 times").split(" ")

for (let i = 1; i <= numbers.length; i++) {
  console.log(numbers[numbers.length - i])
}

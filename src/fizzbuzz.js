class Fizzbuzz {
  isDivisibleBy(number, divisibleBy) {
    return number % divisibleBy === 0;
  }
  play(number) {
    if (this.isDivisibleBy(number, 15)) {
      return "FizzBuzz"
    } else if (this.isDivisibleBy(number, 5)) {
      return "Buzz"
    } else if (this.isDivisibleBy(number, 3)) {
      return "Fizz"
    } else {
      return number
    }
  }
}

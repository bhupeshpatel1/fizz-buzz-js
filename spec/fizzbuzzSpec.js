describe('fizzbuzz', function() {
  var fizzbuzz;

/*
below line is equivalent to the let helper in RSpec
so we don't need to repeat line 9 in each describe test
*/
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      expect(fizzbuzz.isDivisibleBy(3, 3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleBy(1, 3)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleBy(5, 5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleBy(1, 5)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleBy(15, 15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleBy(1, 15)).toBe(false);
    });
  });

  describe('with multiples of three', function() {
    it('returns Fizz for three', function() {
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });
    it('returns Fizz for six', function() {
      expect(fizzbuzz.play(6)).toEqual("Fizz");
    });
  });

  describe('with multiples of five', function() {
    it('returns Buzz for five', function() {
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });
    it('returns Buzz for ten', function() {
      expect(fizzbuzz.play(10)).toEqual("Buzz");
    });
  });

  describe('with multiples of fifteen', function() {
    it('returns FizzBuzz for fifteen', function() {
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });
    it('returns FizzBuzz for thirty', function() {
      expect(fizzbuzz.play(30)).toEqual("FizzBuzz");
    });
  });

  describe('with multiples of any other', function() {
    it('returns number for seven', function() {
      expect(fizzbuzz.play(7)).toEqual(7);
    });
    it('returns number for eleven', function() {
      expect(fizzbuzz.play(11)).toEqual(11);
    });
  });
});

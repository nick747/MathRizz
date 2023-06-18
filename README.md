# MathRizz Library
MathRizz is a JavaScript library that provides multiple mathematical functions and methods. It includes basic arithmetic operations, power and square root calculations, rounding functions, minimum and maximum value calculations, summation, factorial, greatest common divisor (GCD) and least common multiple (LCM), prime number detection, trigonometric functions, logarithms, exponential function, random number generation, number conversion, and various other mathematical utilities.

## Installation
Install the MathRizz library using npm:
```shell
npm install mathrizz
```

## How to use it
Import the MathRizz library in your JavaScript code:
```js
const MathRizz = require('mathrizz');
```
or
```js
import MathRizz from 'mathrizz';
```

## Functions
The library provides the following mathematical functions/methods:
### Basic Operations:
- `add(a, b)`: Returns the sum of two numbers.
- `subtract(a, b)`: Returns the difference between two numbers.
-  `multiply(a, b)`: Returns the product of two numbers.
-  `divide(a, b)`: Returns the quotient of two numbers.
-  `power(n, e)`: Returns the result of raising a number to a given exponent.

### Square Root and Absolute Value:
- `sqrt(n)`: Returns the square root of a number. If the number is negative, returns NaN.
- `abs(n)`: Returns the absolute value of a number.

### Rounding:
- `roundUp(n)`: Returns the smallest integer greater than or equal to a number.
- `roundDown(n)`: Returns the largest integer less than or equal to a number.
- `round(n)`: Returns the nearest integer to a number. If the decimal part is exactly 0.5, rounds up.

### Minimum and Maximum:
- `min(n)`: Returns the smallest number from an array of numbers.
- `max(n)`: Returns the largest number from an array of numbers.

### Sum and Factorial:
- `sum(n)`: Returns the sum of all numbers in an array.
- `fact(n)`: Returns the factorial of a non-negative integer.

### Greatest Common Divisor and Least Common Multiple:
- `gcd(n)`: Returns the greatest common divisor (GCD) of multiple numbers.
- `lcm(n)`: Returns the least common multiple (LCM) of multiple numbers.

### Primality and Parity:
- `isPrime(n)`: Checks if a number is prime.
- `isEven(n)`: Checks if a number is even.
- `isOdd(n)`: Checks if a number is odd.

### Trigonometric Functions:
- `toRadians(d)`: Converts an angle from degrees to radians.
- `toDegrees(r)`: Converts an angle from radians to degrees.
- `sin(a)`: Returns the sine of an angle.
- `cos(a)`: Returns the cosine of an angle.
- `tan(a)`: Returns the tangent of an angle.
- `cot(a)`: Returns the cotangent of an angle.
- `sec(a)`: Returns the secant of an angle.
- `csc(a)`: Returns the cosecant of an angle.

### Logarithmic and Exponential Functions:
- `log(n)`: Returns the natural logarithm (base e) of a number.
- `log10(n)`: Returns the logarithm (base 10) of a number.
- `exp(n)`: Returns the exponential function of a number.

### Random Numbers:
- `rand()`: Returns a random floating-point number between 0 and 1.
- `randInt(n, m)`: Returns a random integer between n and m (inclusive).

### Number Conversion:
`toBin(n)`: Converts a number to its binary representation.
`toOct(n)`: Converts a number to its octal representation.
`toHex(n)`: Converts a number to its hexadecimal representation.

### Miscellaneous:
- `isPalindrome(n)`: Checks if a number is a palindrome.
- `isPerfectSquare(n)`: Checks if a number is a perfect square.

### Amicable Numbers:
- `isAmicable(n, m)`: Returns true if n and m are amicable numbers; otherwise, returns false.

### Prime Factors:
- `primeFactors(n)`: Returns an array containing the prime factors of n.

### Armstrong Number:
- `isArmstrong(n)`: Returns true if n is an Armstrong number; otherwise, returns false.

### Fibonacci Sequence:
- `fibonacci(n)`: Returns the nth number in the Fibonacci sequence.

### Statistical Functions:
- `mean(n)`: Returns the mean (average) of the numbers in the array n.
- `median(n)`: Returns the median of the numbers in the array n.
- `mode(n)`: Returns an array containing the mode(s) of the numbers in the array n.
- `range(n)`: Returns the range of the numbers in the array n.
- `standardDeviation(n)`: Returns the standard deviation of the numbers in the array n.

### Combinatorial Functions:
- `binomialCoefficient(n, k)`: Returns the binomial coefficient "n choose k".
- `permutations(n, k)`: Returns the number of permutations of n objects taken k at a time.
- `combinations(n, k)`: Returns the number of combinations of n objects taken k at a time.

### Geometry
- `calcCircleArea(r)`: Returns the area of a circle given the ray.
- `calcCircumference(r)`: Returns the circumference of a circle given the ray.
- `calcSquareArea(l)`: Returns the area of a square given the side.
- `calcSquarePerim(l)`: Returns the perimeter of a square given the side.
- `calcRectArea(b, h)`: Returns the area of a rectangle given the base and the height.
- `calcRectPerim(b, h)`: Returns the perimeter of a rectangle given the base and the height.
- `calcTrapezeArea(B, b, h)`: Returns the area of a trapeze given the two bases and the height.
- `calcTrapezePerim(B, b, l)`: Returns the perimeter of a trapeze given the two bases and the oblique side.
- `calcTriangleArea(b, h)`: Returns the area of a triangle given the base and the height.
- `calcTrianglePerim(c1, c2, h)`: Returns the perimeter of a triangle given the two cathetuses and the hypotenuse.
- `calcTriangleCat(c, h)`: Returns the cathetus of a triangle given the other cathetus and the hypotenuse.
- `calcTriangleHyp(c1, c2)`: Returns the hypotenuse of a triangle given the two cathetuses.

### Contributing: <br />
If you wish to contribute to the creation of this library, feel free to do so by opening an issue on the connected GitHub page

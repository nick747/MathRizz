let MathRizz = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (n, e) {
    let p = 1;
    for (let i = 0; i < e; i++) {
      p *= n;
    }
    return p;
  },
  sqrt: function (n) {
    if (n < 0) {
      return NaN;
    }

    let sqrt = n / 2;
    let precision = 0.000001;

    while (Math.abs(sqrt * sqrt - n) > precision) {
      sqrt = (sqrt + n / sqrt) / 2;
    }

    return sqrt;
  },
  abs: function (n) {
    if (n < 0) {
      return -n;
    } else {
      return n;
    }
  },
  roundUp: function (n) {
    let intPart = parseInt(n);

    if (n > intPart) {
      return intPart + 1;
    } else {
      return intPart;
    }
  },
  roundDown: function (n) {
    let intPart = parseInt(n);

    if (n < intPart) {
      return intPart - 1;
    } else {
      return intPart;
    }
  },
  round: function (n) {
    let intPart = parseInt(n);
    let decPart = n - intPart;

    if (decPart >= 0.5) {
      return intPart + 1;
    } else {
      return intPart;
    }
  },
  min: function (n) {
    let min = n[0];

    for (let i = 0; i < n.length; i++) {
      if (min > n[i]) {
        min = n[i];
      }
    }

    return min;
  },
  max: function (n) {
    let max = n[0];

    for (let i = 0; i < n.length; i++) {
      if (max < n[i]) {
        max = n[i];
      }
    }

    return max;
  },
  sum: function (n) {
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
      sum += n[i];
    }

    return sum;
  },
  fact: function (n) {
    if (n < 0) {
      return NaN;
    } else if (n == 0) {
      return 1;
    } else {
      return n * MathRizz.fact(n - 1);
    }
  },
  gcd: function (n) {
    function simpleGCD(a, b) {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
    function simpleLCM(a, b) {
      return (a * b) / simpleGCD(a, b);
    }

    let gcd = n[0];
    for (let i = 1; i < n.length; i++) {
      gcd = simpleGCD(gcd, n[i]);
    }
    return gcd;
  },
  lcm: function (n) {
    function simpleGCD(a, b) {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
    function simpleLCM(a, b) {
      return (a * b) / simpleGCD(a, b);
    }

    let lcm = n[0];
    for (let i = 1; i < n.length; i++) {
      lcm = simpleLCM(lcm, n[i]);
    }
    return lcm;
  },
  isPrime: function (n) {
    if (n <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  },
  isEven: function (n) {
    if (n % 2 == 0) {
      return true;
    } else {
      return false;
    }
  },
  isOdd: function (n) {
    if (n % 2 != 0) {
      return true;
    } else {
      return false;
    }
  },
  toRadians: function (d) {
    return d * (Math.PI / 180);
  },
  toDegrees: function (r) {
    return r * (180 / Math.PI);
  },
  sin: function (a) {
    return Math.sin(a);
  },
  cos: function (a) {
    return Math.cos(a);
  },
  tan: function (a) {
    return Math.tan(a);
  },
  cot: function (a) {
    return 1 / MathRizz.tan(a);
  },
  sec: function (a) {
    return 1 / MathRizz.cos(angle);
  },
  csc: function (a) {
    return 1 / MathRizz.sin(angle);
  },
  log: function (n) {
    return Math.log(n);
  },
  log10: function (n) {
    return Math.log10(n);
  },
  exp: function (n) {
    let exp = 1;
    let term = 1;

    for (let i = 1; i <= 10; i++) {
      term *= x / i;
      exp += term;
    }

    return exp;
  },
  rand: function (n) {
    let x = MathRizz.sin(new Date().getTime());
    return x - Math.floor(x);
  },
  randInt: function (n, m) {
    return Math.floor(MathRizz.rand() * (n - m + 1)) + m;
  },
  toBin: function (n) {
    return n.toString(2);
  },
  toOct: function (n) {
    return n.toString(8);
  },
  toHex: function (n) {
    return n.toString(16);
  },
  isPalindrome: function (n) {
    let str = n.toString();
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  },
  isPerfectSquare: function (n) {
    let sqrt = MathRizz.sqrt(num);
    return Math.floor(sqrt) === sqrt;
  },
  isAmicable: function (n, m) {
    function sumOfDivisors(n) {
      let s = 1;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          s += i;
          if (i !== n / i) {
            s += n / i;
          }
        }
      }
      return s;
    }

    return sumOfDivisors(n) === m && sumOfDivisors(m) === n;
  },
  primeFactors: function (n) {
    let factors = [];
    let divisor = 2;

    while (n > 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n /= divisor;
      } else {
        divisor++;
      }
    }

    return factors;
  },
  isArmstrong: function (n) {
    let numString = String(n);
    let numDigits = numString.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      let digit = parseInt(numString[i]);
      sum += MathRizz.power(digit, numDigits);
    }

    return sum === n;
  },
  fibonacci: function (n) {
    let sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence[n];
  },
  mean: function (n) {
    let s = 0,
      i,
      c = 0;
    for (i = 0; i < n.length; i++) {
      s += n[i];
      c++;
    }

    return s / c;
  },
  median: function (n) {
    let sorted = n.slice().sort((a, b) => a - b);
    let middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      return sorted[middle];
    }
  },
  mode: function (n) {
    let countMap = new Map();
    let maxCount = 0;
    let modes = [];

    n.forEach((num) => {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1);
      } else {
        countMap.set(num, 1);
      }

      if (countMap.get(num) > maxCount) {
        maxCount = countMap.get(num);
        modes = [num];
      } else if (countMap.get(num) === maxCount) {
        modes.push(num);
      }
    });

    return modes;
  },
  range: function (n) {
    if (n.length === 0) {
      throw new Error("The array must not be empty.");
    }

    var min = Math.min(...n);
    var max = Math.max(...n);

    return max - min;
  },
  standardDeviation: function (n) {
    if (n.length === 0) {
      throw new Error("The array must not be empty.");
    }

    const mean = n.reduce((sum, num) => sum + num, 0) / n.length;
    const squaredDifferences = n.map((num) => MathRizz.power(num - mean, 2));
    const variance =
      squaredDifferences.reduce((sum, num) => sum + num, 0) / n.length;
    const standardDeviation = MathRizz.sqrt(variance);

    return standardDeviation;
  },
  binomialCoefficient: function (n, k) {
    if (k < 0 || k > n) {
      return 0;
    }

    let c = 1;
    for (let i = 0; i < k; i++) {
      c *= (n - i) / (i + 1);
    }

    return c;
  },
  permutations: function (n, k) {
    if (k > n) {
      return 0;
    }

    let p = 1;
    for (let i = 0; i < k; i++) {
      p *= n - i;
    }

    return p;
  },
  combinations: function (n, k) {
    if (k > n) {
      return 0;
    }

    let num = 1;
    let den = 1;

    for (let i = 1; i <= k; i++) {
      num *= n - i + 1;
      den *= i;
    }

    return num / den;
  },
};

module.exports = MathRizz;

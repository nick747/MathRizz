let MathRizz = {
  add: function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  substract: function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  multiply: function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  divide: function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
      if (b != 0) {
        return a / b;
      } else {
        throw new Error("The divisor must be different from 0");
      }
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  power: function (n, e) {
    if (typeof n === "number" && typeof e === "number") {
      let p = 1;
      for (let i = 0; i < e; i++) {
        p *= n;
      }
      return p;
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  sqrt: function (n) {
    if (typeof n === "number") {
      if (n < 0) {
        return NaN;
      }

      let sqrt = n / 2;
      let precision = 0.000001;

      while (Math.abs(sqrt * sqrt - n) > precision) {
        sqrt = (sqrt + n / sqrt) / 2;
      }

      return sqrt;
    } else {
      throw new Error("Input must be a number");
    }
  },
  abs: function (n) {
    if (typeof n === "number") {
      if (n < 0) {
        return -n;
      } else {
        return n;
      }
    } else {
      throw new Error("Input must be a number");
    }
  },
  roundUp: function (n) {
    if (typeof n === "number") {
      let intPart = parseInt(n);

      if (n > intPart) {
        return intPart + 1;
      } else {
        return intPart;
      }
    } else {
      throw new Error("Input must be a number");
    }
  },
  roundDown: function (n) {
    if (typeof n === "number") {
      let intPart = parseInt(n);

      if (n < intPart) {
        return intPart - 1;
      } else {
        return intPart;
      }
    } else {
      throw new Error("Input must be a number");
    }
  },
  round: function (n) {
    if (typeof n === "number") {
      let intPart = parseInt(n);
      let decPart = n - intPart;

      if (decPart >= 0.5) {
        return intPart + 1;
      } else {
        return intPart;
      }
    } else {
      throw new Error("Input must be a number");
    }
  },
  min: function (n) {
    if (Array.isArray(n)) {
      let min = n[0];

      for (let i = 0; i < n.length; i++) {
        if (min > n[i]) {
          min = n[i];
        }
      }

      return min;
    } else {
      throw new Error("Input must be an array");
    }
  },
  max: function (n) {
    if (Array.isArray(n)) {
      let max = n[0];

      for (let i = 0; i < n.length; i++) {
        if (max < n[i]) {
          max = n[i];
        }
      }

      return max;
    } else {
      throw new Error("Input must be an array");
    }
  },
  sum: function (n) {
    if (Array.isArray(n)) {
      let sum = 0;

      for (let i = 0; i < n.length; i++) {
        sum += n[i];
      }

      return sum;
    } else {
      throw new Error("Input must be an array");
    }
  },
  fact: function (n) {
    if (typeof n === "number") {
      if (n < 0) {
        return NaN;
      } else if (n == 0) {
        return 1;
      } else {
        return n * MathRizz.fact(n - 1);
      }
    } else {
      throw new Error("Input must be a number");
    }
  },
  gcd: function (n) {
    if (Array.isArray(n)) {
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
    } else {
      throw new Error("Input must be an array");
    }
  },
  lcm: function (n) {
    if (Array.isArray(n)) {
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
    } else {
      throw new Error("Input must be an array");
    }
  },
  isPrime: function (n) {
    if (typeof n === "number") {
      if (n <= 1) {
        return false;
      }

      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }

      return true;
    } else {
      throw new Error("Input must be a number");
    }
  },
  isEven: function (n) {
    if (typeof n === "number") {
      if (n % 2 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Input must be a number");
    }
  },
  isOdd: function (n) {
    if (typeof n === "number") {
      if (n % 2 != 0) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Input must be a number");
    }
  },
  toRadians: function (d) {
    if (typeof d === "number") {
      return d * (Math.PI / 180);
    } else {
      throw new Error("Input must be a number");
    }
  },
  toDegrees: function (r) {
    if (typeof r === "number") {
      return r * (180 / Math.PI);
    } else {
      throw new Error("Input must be a number");
    }
  },
  sin: function (a) {
    if (typeof a === "number") {
      return Math.sin(a);
    } else {
      throw new Error("Input must be a number");
    }
  },
  cos: function (a) {
    if (typeof a === "number") {
      return Math.cos(a);
    } else {
      throw new Error("Input must be a number");
    }
  },
  tan: function (a) {
    if (typeof a === "number") {
      return Math.tan(a);
    } else {
      throw new Error("Input must be a number");
    }
  },
  cot: function (a) {
    if (typeof a === "number") {
      return 1 / MathRizz.tan(a);
    } else {
      throw new Error("Input must be a number");
    }
  },
  sec: function (a) {
    if (typeof a === "number") {
      return 1 / MathRizz.cos(a);
    } else {
      throw new Error("Input must be a number");
    }
  },
  csc: function (a) {
    if (typeof a === "number") {
      return 1 / MathRizz.sin(a);
    } else {
      throw new Error("Input must be a number");
    }
  },
  log: function (n) {
    if (typeof n === "number") {
      return Math.log(n);
    } else {
      throw new Error("Input must be a number");
    }
  },
  log10: function (n) {
    if (typeof n === "number") {
      return Math.log10(n);
    } else {
      throw new Error("Input must be a number");
    }
  },
  exp: function (n) {
    if (typeof n === "number") {
      let exp = 1;
      let term = 1;

      for (let i = 1; i <= 10; i++) {
        term *= x / i;
        exp += term;
      }

      return exp;
    } else {
      throw new Error("Input must be a number");
    }
  },
  rand: function (n) {
    if (typeof d === "number") {
      let x = MathRizz.sin(new Date().getTime());
      return x - Math.floor(x);
    } else {
      throw new Error("Input must be a number");
    }
  },
  randInt: function (n, m) {
    if (typeof n === "number" && typeof m === "number") {
      return Math.floor(MathRizz.rand() * (n - m + 1)) + m;
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  toBin: function (n) {
    if (typeof n === "number") {
      return n.toString(2);
    } else {
      throw new Error("Input must be a number");
    }
  },
  toOct: function (n) {
    if (typeof n === "number") {
      return n.toString(8);
    } else {
      throw new Error("Input must be a number");
    }
  },
  toHex: function (n) {
    if (typeof n === "number") {
      return n.toString(16);
    } else {
      throw new Error("Input must be a number");
    }
  },
  isPalindrome: function (n) {
    if (typeof d === "number") {
      let str = n.toString();
      let reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    } else {
      throw new Error("Input must be a number");
    }
  },
  isPerfectSquare: function (n) {
    if (typeof d === "number") {
      let sqrt = MathRizz.sqrt(num);
      return Math.floor(sqrt) === sqrt;
    } else {
      throw new Error("Input must be a number");
    }
  },
  isAmicable: function (n, m) {
    if (typeof n === "number" && typeof m === "number") {
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
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  primeFactors: function (n) {
    if (typeof n === "number") {
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
    } else {
      throw new Error("Input must be a number");
    }
  },
  isArmstrong: function (n) {
    if (typeof n === "number") {
      let numString = String(n);
      let numDigits = numString.length;
      let sum = 0;

      for (let i = 0; i < numDigits; i++) {
        let digit = parseInt(numString[i]);
        sum += MathRizz.power(digit, numDigits);
      }

      return sum === n;
    } else {
      throw new Error("Input must be a number");
    }
  },
  fibonacci: function (n) {
    if (typeof n === "number") {
      let sequence = [0, 1];

      for (let i = 2; i <= n; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
      }

      return sequence[n];
    } else {
      throw new Error("Input must be a number");
    }
  },
  mean: function (n) {
    if (Array.isArray(n)) {
      if (n.length === 0) {
        throw new Error("The array must not be empty.");
      }

      let s = 0,
        i,
        c = 0;
      for (i = 0; i < n.length; i++) {
        s += n[i];
        c++;
      }

      return s / c;
    } else {
      throw new Error("Input must be an array");
    }
  },
  median: function (n) {
    if (Array.isArray(n)) {
      if (n.length === 0) {
        throw new Error("The array must not be empty.");
      }

      let sorted = n.slice().sort((a, b) => a - b);
      let middle = Math.floor(sorted.length / 2);

      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      } else {
        return sorted[middle];
      }
    } else {
      throw new Error("Input must be an array");
    }
  },
  mode: function (n) {
    if (Array.isArray(n)) {
      if (n.length === 0) {
        throw new Error("The array must not be empty.");
      }
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
    } else {
      throw new Error("Input must be an array");
    }
  },
  range: function (n) {
    if (Array.isArray(n)) {
      if (n.length === 0) {
        throw new Error("The array must not be empty.");
      }

      var min = Math.min(...n);
      var max = Math.max(...n);

      return max - min;
    } else {
      throw new Error("Input must be an array");
    }
  },
  standardDeviation: function (n) {
    if (Array.isArray(n)) {
      if (n.length === 0) {
        throw new Error("The array must not be empty.");
      }

      const mean = n.reduce((sum, num) => sum + num, 0) / n.length;
      const squaredDifferences = n.map((num) => MathRizz.power(num - mean, 2));
      const variance =
        squaredDifferences.reduce((sum, num) => sum + num, 0) / n.length;
      const standardDeviation = MathRizz.sqrt(variance);

      return standardDeviation;
    } else {
      throw new Error("Input must be an array");
    }
  },
  binomialCoefficient: function (n, k) {
    if (typeof n === "number" && typeof k === "number") {
      if (k < 0 || k > n) {
        return 0;
      }

      let c = 1;
      for (let i = 0; i < k; i++) {
        c *= (n - i) / (i + 1);
      }

      return c;
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  permutations: function (n, k) {
    if (typeof n === "number" && typeof k === "number") {
      if (k > n) {
        return 0;
      }

      let p = 1;
      for (let i = 0; i < k; i++) {
        p *= n - i;
      }

      return p;
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
  combinations: function (n, k) {
    if (typeof n === "number" && typeof k === "number") {
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
    } else {
      throw new Error("Inputs must be numbers");
    }
  },
};

module.exports = MathRizz;

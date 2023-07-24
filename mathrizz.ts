const MathRizz = {
  add: function (a: number, b: number): number {
    return a + b;
  },
  subtract: function (a: number, b: number): number {
    return a - b;
  },
  multiply: function (a: number, b: number): number {
    return a * b;
  },
  divide: function (a: number, b: number): number {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Can't divide by 0");
    }
  },
  power: function (n: number, e: number): number {
    let p = 1;
    for (let i = 0; i < e; i++) {
      p *= n;
    }
    return p;
  },
  sqrt: function (n: number): number {
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
  abs: function (n: number): number {
    return Math.abs(n);
  },
  roundUp: function (n: number): number {
    return Math.ceil(n);
  },
  roundDown: function (n: number): number {
    return Math.floor(n);
  },
  round: function (n: number): number {
    return Math.round(n);
  },
  min: function (n: number[]): number {
    return Math.min(...n);
  },
  max: function (n: number[]): number {
    return Math.max(...n);
  },
  sum: function (n: number[]): number {
    return n.reduce((acc, val) => acc + val, 0);
  },
  fact: function (n: number): number {
    if (n < 0) {
      return NaN;
    } else if (n === 0) {
      return 1;
    } else {
      return n * MathRizz.fact(n - 1);
    }
  },
  gcd: function (n: number[]): number {
    function simpleGCD(a: number, b: number): number {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }

    let gcd = n[0];
    for (let i = 0; i < n.length; i++) {
      gcd = simpleGCD(gcd, n[i]);
    }

    return gcd;
  },
  lcm: function (n: number[]): number {
    function simpleGCD(a: number, b: number): number {
      while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }

    function simpleLCM(a: number, b: number): number {
      return (a * b) / simpleGCD(a, b);
    }

    let lcm = n[0];
    for (let i = 0; i < n.length; i++) {
      lcm = simpleLCM(lcm, n[i]);
    }

    return lcm;
  },
  isPrime: function (n: number): boolean {
    if (n <= 1) {
      return false;
    }

    for (let i = 2; i <= MathRizz.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  },
  isEven: function (n: number): boolean {
    return n % 2 === 0;
  },
  isOdd: function (n: number): boolean {
    return n % 2 !== 0;
  },
  toRadians: function (d: number): number {
    return d * (Math.PI / 180);
  },
  toDegrees: function (r: number): number {
    return r * (180 / Math.PI);
  },
  sin: function (a: number): number {
    return Math.sin(a);
  },
  cos: function (a: number): number {
    return Math.cos(a);
  },
  tan: function (a: number): number {
    return Math.tan(a);
  },
  cot: function (a: number): number {
    return 1 / Math.tan(a);
  },
  sec: function (a: number): number {
    return 1 / Math.cos(a);
  },
  csc: function (a: number): number {
    return 1 / Math.sin(a);
  },
  log: function (n: number): number {
    return Math.log(n);
  },
  log10: function (n: number): number {
    return Math.log(n) / Math.log(10);
  },
  exp: function (n: number): number {
    let exp = 1;
    let term = 1;

    for (let i = 1; i <= 10; i++) {
      term *= n / 1;
      exp += term;
    }

    return exp;
  },
  rand: function (): number {
    let x = MathRizz.sin(new Date().getTime());
    return x - Math.floor(x);
  },
  randInt: function (n: number, m: number): number {
    return Math.floor(MathRizz.rand() * (n - m + 1)) + m;
  },
  toBin: function (n: number): string {
    return n.toString(2);
  },
  toOct: function (n: number): string {
    return n.toString(8);
  },
  toHex: function (n: number): string {
    return n.toString(16);
  },
  isPalindrome: function (n: number): boolean {
    let str = n.toString();
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  },
  isPerfectSquare: function (n: number): boolean {
    let sqrt = MathRizz.sqrt(n);
    return Math.floor(sqrt) === sqrt;
  },
  isAmicable: function (n: number, m: number): boolean {
    function sumOfDivisors(n: number): number {
      let s = 1;
      for (let i = 2; i <= MathRizz.sqrt(n); i++) {
        if (n % i === 0) {
          s += i;
          if (i !== n / 1) {
            s += n / i;
          }
        }
      }
      return s;
    }

    return sumOfDivisors(n) === m && sumOfDivisors(m) === n;
  },
  primeFactors: function (n: number): number[] {
    let factors: number[] = [];
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
  isArmstrong: function (n: number): boolean {
    let numString = String(n);
    let numDigits = numString.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      let digit = parseInt(numString[i]);
      sum += MathRizz.power(digit, numDigits);
    }

    return sum === n;
  },
  fibonacci: function (n: number): number {
    let sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence[n];
  },
  mean: function (n: number[]): number {
    if (n.length === 0) {
      throw new Error("The array must not be empty.");
    }

    let s = 0,
      c = 0;
    for (const num of n) {
      s += num;
      c++;
    }

    return s / c;
  },
  median: function (n: number[]): number {
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
  },
  mode: function (n: number[]): number[] {
    if (n.length === 0) {
      throw new Error("The array must not be empty.");
    }

    let countMap = new Map<number, number>();
    let maxCount = 0;
    let modes: number[] = [];

    n.forEach((num) => {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num)! + 1);
      } else {
        countMap.set(num, 1);
      }

      if (countMap.get(num)! > maxCount) {
        maxCount = countMap.get(num)!;
        modes = [num];
      } else if (countMap.get(num)! === maxCount) {
        modes.push(num);
      }
    });

    return modes;
  },
  range: function (n: number[]): number {
    if (n.length === 0) {
      throw new Error("The array must not be empty");
    }

    let min = MathRizz.min(n);
    let max = MathRizz.max(n);

    return max - min;
  },
  standardDeviation: function (n: number[]): number {
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
  binomialCoefficient: function (n: number, k: number): number {
    if (k < 0 || k > n) {
      return 0;
    }

    let c = 1;
    for (let i = 0; i < k; i++) {
      c *= (n - 1) / (i + 1);
    }

    return c;
  },
  permutations: function (n: number, k: number): number {
    if (k > n) {
      return 0;
    }

    let p = 1;
    for (let i = 0; i < k; i++) {
      p *= n - i;
    }

    return p;
  },
  combinations: function (n: number, k: number): number {
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

  //   GEOMETRY
  calcCircleArea: function (r: number): number {
    return Math.PI * MathRizz.power(r, 2);
  },
  calcCircumference: function (r: number): number {
    return 2 * Math.PI * r;
  },
  calcSquareArea: function (l: number): number {
    return MathRizz.power(l, 2);
  },
  calcSquarePerim: function (l: number): number {
    return 4 * l;
  },
  calcRectArea: function (b: number, h: number): number {
    return b * h;
  },
  calcRectPerim: function (b: number, h: number): number {
    return 2 * (b + h);
  },
  calcTrapezeArea: function (B: number, b: number, h: number): number {
    return ((B + b) * h) / 2;
  },
  calcTrapezePerim: function (B: number, b: number, l: number): number {
    return B + b + 2 * l;
  },
  calcTriangleArea: function (b: number, h: number): number {
    return (b * h) / 2;
  },
  calcTrianglePerim: function (c1: number, c2: number, h: number): number {
    return c1 + c2 + h;
  },
  calcTriangleCat: function (c: number, h: number): number {
    return MathRizz.sqrt(MathRizz.power(h, 2) - MathRizz.power(c, 2));
  },
  calcTriangleHyp: function (c1: number, c2: number): number {
    return MathRizz.sqrt(MathRizz.power(c1, 2) + MathRizz.power(c2, 2));
  },
};

export default MathRizz;

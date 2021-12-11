/* Nth Magical Number

A positive integer is magical if it is divisible by either a or b.

Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 109 + 7.


Example 1:
Input: n = 1, a = 2, b = 3
Output: 2

Example 2:
Input: n = 4, a = 2, b = 3
Output: 6

Example 3:
Input: n = 5, a = 2, b = 4
Output: 10

Example 4:
Input: n = 3, a = 6, b = 4
Output: 8
 

Constraints:
1 <= n <= 109
2 <= a, b <= 4 * 104
*/

const nthMagicalNumber = (n: number, a: number, b: number): number => {
	if (a === b) return (a * n)  % (1e9+7);
	
	const lcm = calculateLcm(a, b);
	const magicalPerLcm = (lcm/a) + (lcm/b) - 1;
	const m = Math.floor(n / magicalPerLcm); // number of lcm that can fit before nth magical
	// add from (m*magicalPerLcm) until we get to nth
	let remainder = 0;
	for (let i = 1, j = 1, magicalNeeded = n - (m * magicalPerLcm); magicalNeeded; magicalNeeded--) {
		remainder = (a*i < b*j) ? a*i++ : b*j++;
	}
	
	return (m * lcm + remainder) % (1e9+7);
};

/**
 * Calculates the gcd of two integers recursively
 * @param a the larger integer
 * @param b the smaller integer
 * @returns gcd
 */
const calculateGcd = (a: number, b: number): number => {
	const c = a % b;
	return c ? calculateGcd(b, c) : b;
};

/**
 * Calculates the lcm of two integers
 * @param a integer
 * @param b integer
 * @returns lcm
 */
const calculateLcm = (a: number, b: number): number => {
	let c = 0;
	b > a && (c = b, b = a, a = c); // swap a, b if b larger
	return (a*b)/calculateGcd(a, b);
};

const test = (n: number, a: number, b: number): void => {
	console.log(`n: ${n}, a: ${a}, b: ${b}, nthMagicalNumber: ${nthMagicalNumber(n, a, b)}`);
}

test(1, 2, 3);
test(4, 2, 3);
test(5, 2, 4);
test(3, 6, 4);
test(7, 5, 8);
test(1000000000, 40000, 40000);

export {};
/* Broken Calculator

On a broken calculator that has a number showing on its display, we can perform two operations:

Double: Multiply the number on the display by 2, or;
Decrement: Subtract 1 from the number on the display.

Initially, the calculator is displaying the number X.

Return the minimum number of operations needed to display the number Y.

 

Example 1:

Input: X = 2, Y = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

Example 2:

Input: X = 5, Y = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.

Example 3:

Input: X = 3, Y = 10
Output: 3
Explanation:  Use double, decrement and double {3 -> 6 -> 5 -> 10}.

Example 4:

Input: X = 1024, Y = 1
Output: 1023
Explanation: Use decrement operations 1023 times.
 

Note:

1 <= X <= 10^9
1 <= Y <= 10^9

*/

/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    if (Y <= X) return X - Y;
    // if Y is greater than X, work backwards and keep count.
    // If Y is odd then a decrement was done (cannot double to get an odd number) - so add 1 to Y
    // If even, then a double was done for the least amount of steps
    // (even number could be reached by doing decrement, twice, but its less steps to do decrement then double, rather than double then decrement twice)
    let count = 0;
    while (Y > X) {
        count++;
        Y = (Y % 2) ? Y + 1 : Y / 2;
    }
    if (Y < X) count += (X - Y);
    return count;
};

const test = (X, Y) => {
    console.log(X, Y, brokenCalc(X, Y));
}

test(5, 8);
test(3, 10);
test(1024, 1);
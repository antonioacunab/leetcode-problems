// https://leetcode.com/problems/filter-elements-from-array/description/

/**
 * Returns a new array with the element in "numbers" that matches the filtering function "fn"
 *
 * @param numbers - A list of numbers
 * @param fn      - A filter function to be called for every number in "numbers"
 */
export function filter (numbers: number[], fn: (number: number, index: number) => boolean): number[]
{
    const output: number[] = new Array();

    let index: number = 0;

    for (index; index < numbers.length; index++)
        if (fn(numbers[index], index))
            output.push(numbers[index]);

    return output;
}
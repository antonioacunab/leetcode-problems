// https://leetcode.com/problems/to-be-or-not-to-be/description/

/**
 * Functions that compares a value with another
 */
export interface Matchers
{
    /**
     * Returns true if "expected" matches with an internal value
     *
     * @param expected - Value to be compared against the internal value
     *
     * @throws When the provided "expected" is different from the internal value
     */
    toBe (expected: any): boolean;

    /**
     * Returns true if "expected" does not match with an internal value
     *
     * @param expected - Value to be compared against the internal value
     *
     * @throws When the provided "expected" is equal to the internal value
     */
    notToBe (expected: any): boolean;
}

/**
 * Returns two functions to compare "value"
 *
 * The one called "toBe" verifies that an input is equal to "value"
 * The one called "notToBe" verifies that an input is not equal to "value"
 *
 * @param value - Value to be compared by the returned functions
 */
export function expect (value: any): Matchers
{
    return {
        toBe (expected: any): boolean
        {
            if (value !== expected)
                throw new Error("Not Equal");

            return true;
        },
        notToBe (expected: any): boolean
        {
            if (value === expected)
                throw new Error("Equal");

            return true;
        },
    };
}
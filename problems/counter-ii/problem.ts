// https://leetcode.com/problems/counter-ii/description/

/**
 * Functions to operate on an internal value
 */
export interface Operations
{
    /**
     * Increases the internal value by 1
     */
    increment (): number;

    /**
     * Decreases the internal value by 1
     */
    decrement (): number;

    /**
     * Resets the internal value to its original value
     */
    reset (): number;
}

/**
 * Returns a set of functions to operate on the provided "init"
 *
 * The one called "increment" increases the value of "init" by 1 and update it
 * The one called "decrement" decreases the value of "init" by 1 and update it
 * The one called "reset" resets "init" to its initial value
 *
 * @param {integer} init - Initial value to start operating from
 *
 * @return { increment: Function, decrement: Function, reset: Function }
 */
export function createCounter (init: number): Operations
{
    const initialValue: number = init;

    return {
        increment (): number
        {
            return ++init;
        },
        decrement (): number
        {
            return --init;
        },
        reset (): number
        {
            init = initialValue;

            return init;
        }
    }
};

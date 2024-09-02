// https://leetcode.com/problems/counter/description/

/**
 * Creates a counter function with the following behavior
 *
 * The first time it is called, it will return the provided "n"
 * Subsequent calls will add +1 to the last returned value
 *
 * @param n - The initial number to be returned by the counter
 */
export function createCounter (n: number): () => number
{
    return () => n++;
};
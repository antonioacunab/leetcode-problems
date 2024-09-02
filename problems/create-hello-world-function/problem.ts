// https://leetcode.com/problems/create-hello-world-function/description/

/**
 * Creates a function that always returns "Hello World"
 */
export function createHelloWorld (): (...args: any) => string
{
    return (..._args: any) => "Hello World";
}
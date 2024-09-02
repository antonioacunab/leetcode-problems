// https://leetcode.com/problems/create-hello-world-function/description/

/**
 * Creates a function that always returns "Hello World"
 */
export function createHelloWorld (): (...args: any) => string
{
    return function (): string
    {
        return "Hello World";
    };
}
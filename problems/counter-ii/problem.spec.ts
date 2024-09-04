import {
         createCounter,
         Operations,
       } from "./problem";

describe("Module: problem", function ()
{
    test("Function: createCounter", function ()
    {
        const initialValue: number = 10;

        let counterValue: number = initialValue;

        let operations: Operations;

        expect(() => operations = createCounter(counterValue)).not.toThrow();

        // operations.increment
        {
            const increment: () => number = operations!.increment;

            // Subsequent calls increment the last result by 1 each
            expect(increment()).toBe(++counterValue); // 11
            expect(increment()).toBe(++counterValue); // 12
            expect(increment()).toBe(++counterValue); // 13
        }

        // operations.decrement
        {
            const decrement: () => number = operations!.decrement;

            // Subsequent calls decrement the last result by 1 each
            expect(decrement()).toBe(--counterValue); // 11
            expect(decrement()).toBe(--counterValue); // 12
            expect(decrement()).toBe(--counterValue); // 13
        }

        // operations.reset
        {
            const reset: () => number = operations!.reset;

            // Every call to this operation will always return the initial value
            expect(reset()).toBe(initialValue); // 10
            expect(reset()).toBe(initialValue); // 10
            expect(reset()).toBe(initialValue); // 10
        }
    });
});
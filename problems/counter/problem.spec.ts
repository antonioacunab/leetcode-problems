import { createCounter } from "./problem";

describe("Module: problem", function ()
{
    test("Function: createCounter", function ()
    {
        // Creating a counter, initial value is 10
        {
            let counterValue: number = 10;

            let counterFn: () => number;

            expect(() => counterFn = createCounter(counterValue)).not.toThrow();

            // First call returns the same provided number
            expect(counterFn!()).toBe(counterValue);

            // Subsequent calls increment the last result by +1 each
            expect(counterFn!()).toBe(++counterValue); // 11
            expect(counterFn!()).toBe(++counterValue); // 12
            expect(counterFn!()).toBe(++counterValue); // 13
        }

        // Creating a counter, initial value is 100
        {
            let counterValue: number = 100;

            let counterFn: () => number;

            expect(() => counterFn = createCounter(counterValue)).not.toThrow();

            // First call returns the same provided number
            expect(counterFn!()).toBe(counterValue);

            // Subsequent calls increment the last result by +1 each
            expect(counterFn!()).toBe(++counterValue); // 101
            expect(counterFn!()).toBe(++counterValue); // 102
            expect(counterFn!()).toBe(++counterValue); // 103
        }
    });
});
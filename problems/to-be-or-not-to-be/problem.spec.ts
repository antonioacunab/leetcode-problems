import {
         expect as customExpect,
         Matchers,
       } from "./problem";

describe("Module: problem", function ()
{
    test("Function: expect", function ()
    {
        let result: Matchers;

        expect(() => result = customExpect(123)).not.toThrow();

        const toBeFn: (expected: any) => boolean = result!.toBe;

        // Should return "true" if the number "123" is provided
        expect(toBeFn(123)).toBe(true);

        // Should throw an error if a number different from "123" is provided
        expect(() => toBeFn(321)).toThrow("Not Equal");

        const notToBeFn: (expected: any) => boolean = result!.notToBe;

        // Should return "true" if a number different from "123" is provided
        expect(notToBeFn(321)).toBe(true);

        // Should throw an error if the number "123" is provided
        expect(() => notToBeFn(123)).toThrow("Equal");
    });
});
import { filter } from "./problem";

describe("Module: problem", function ()
{
    test("Function: filter", function ()
    {
        const numbers: number[] = [10, 20, 30, 40];

        function filterFn (value: number, _index: number): boolean
        {
            if (value <= 10)
                return false;

            return true;
        }

        expect(filter(numbers, filterFn)).toStrictEqual([20, 30, 40]);
    });
});
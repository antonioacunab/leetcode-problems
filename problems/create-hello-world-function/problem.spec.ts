import { createHelloWorld } from "./problem";

describe("Module: problem", function ()
{
    test("Function: createHelloWorld", function ()
    {
        let helloWorldFn: (...args: any) => string;

        expect(() => helloWorldFn = createHelloWorld()).not.toThrow();

        expect(helloWorldFn!()).toBe("Hello World");
    });
});
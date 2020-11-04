const main = require("./main");
test("Returns about good number or not", () => {
    expect(main(100)).toBe("Number is ok");
});




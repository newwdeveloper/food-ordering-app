import sum from "../sum";

test("sum function should calculate sum of two numbers", () => {
  const result = sum(7, 8);
  expect(result).toBe(15);
});

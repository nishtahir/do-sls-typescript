import { describe, expect, test, it } from "@jest/globals";
import { hello } from "../index";

describe("hello", () => {
  it("should return 'Hello, world!'", async () => {
    const message = hello();
    expect(message).toBe("Hello, world!");
  });
});

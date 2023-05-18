import { describe, expect, test, it } from "@jest/globals";
import { main } from "../index";

describe("hello.get", () => {
  it("should return 'Hello, world!'", async () => {
    const response = await main(
      {},
      {
        activationId: "",
        apiHost: "",
        apiKey: "",
        deadline: 0,
        functionName: "",
        functionVersion: "",
        namespace: "",
        requestId: "",
      }
    );
    expect(response.body.message).toBe("Hello, world!");
  });
});

import { hello } from "hello";

export const main = async (params: IDoEvent, context: DoContext) => {
  return {
    body: {
      message: hello(),
    },
  };
};

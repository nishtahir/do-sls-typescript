import commonjs from "rollup-plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: {
    file: "bundle.mjs",
    format: "es",
  },
  external: [],
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
};

/**
 * We can not directly import a json file like we do in
 * commonjs. So we need to create our own custom require
 * function.
 */

import { createRequire } from "module";

export default () => {
  const require = createRequire(import.meta.url);
  return require("./data.json");
};

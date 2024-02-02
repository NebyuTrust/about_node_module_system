/**
 * When we use ESM, fields like __dirname__, and __filename__ are missing.
 * So in order to use them in ESM, we can use the following code.
 */
import { fileURLToPath } from "url";

import { dirname } from "path";

export default () => {
  // Get file name
  const __filename__ = fileURLToPath(import.meta.url);
  const __dirname__ = dirname(__filename__);

  return {
    __filename__,
    __dirname__,
  };
};

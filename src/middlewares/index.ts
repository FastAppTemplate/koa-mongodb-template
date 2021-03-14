import type { App } from "./types";

import logger from "./logger";
import jsonError from "./jsonError";

/**
 * 注册 middleware
 * @param app
 */
export default function middleware(app: App): void {
  logger(app);
  jsonError(app);
}

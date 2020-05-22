import * as Koa from "koa";

import config from "@config";
import router from "./routes";

const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.SERVER.PORT);

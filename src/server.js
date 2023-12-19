const datadogTracer = require('dd-trace').init({ analytics: true, runtimeMetrics: true });
const OpenTracingMiddleware = require("express-opentracing").default;
const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const nextHandler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express({ strict: true });

  server.use(OpenTracingMiddleware({ tracer: datadogTracer }));

  server.get("/health", (req, res) => {
    res.send("ok");
  });

  server.get("*", nextHandler);

  server.listen(port, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on port ${port}.`);
  });
});

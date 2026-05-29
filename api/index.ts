import type { IncomingMessage, ServerResponse } from "http";
// @ts-ignore: module has no declaration file
import server from "../dist/server/server.js";

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    // 1. Construct absolute URL
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = `${protocol}://${host}${req.url || ""}`;

    // 2. Map headers
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((v) => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }

    // 3. Map body if present (for POST/PUT/PATCH/etc.)
    let body: any = null;
    if (req.method !== "GET" && req.method !== "HEAD") {
      const chunks: Uint8Array[] = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      body = Buffer.concat(chunks);
    }

    // 4. Create Web standard Request
    const webRequest = new Request(url, {
      method: req.method,
      headers,
      body,
      // @ts-ignore
      duplex: body ? "half" : undefined,
    });

    // 5. Fetch response from TanStack Start server
    const webResponse = await server.fetch(webRequest);

    // 6. Write status and headers back to Node's ServerResponse
    res.statusCode = webResponse.status;
    res.statusMessage = webResponse.statusText;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // 7. Write response body back to Node's ServerResponse
    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (error) {
    console.error("Gateway error:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
};



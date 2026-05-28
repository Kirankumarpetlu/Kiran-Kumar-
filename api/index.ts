import server from "../dist/server/server.js";

export default async (request: Request) => {
  try {
    return await server.fetch(request);
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

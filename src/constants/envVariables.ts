export const ENV_VARIABLES = Object.freeze({
  BASE_URL: process.env.BASE_URL ?? "http://localhost:4000",
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ?? "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ?? "",
});

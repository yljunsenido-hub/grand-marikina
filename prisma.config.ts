import { defineConfig, env } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // The CLI ONLY needs the direct, non-pooling connection to build tables!
    url: env("POSTGRES_URL_NON_POOLING")
  }
});
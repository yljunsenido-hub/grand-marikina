import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // By using process.env directly, it won't crash if Vercel hasn't loaded it yet during the install phase!
    url: process.env.POSTGRES_URL_NON_POOLING || "",
  }
});
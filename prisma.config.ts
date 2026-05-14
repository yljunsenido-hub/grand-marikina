import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // process.env prevents the strict Prisma crash and waits for Vercel
    url: process.env.POSTGRES_URL_NON_POOLING as string
  }
});
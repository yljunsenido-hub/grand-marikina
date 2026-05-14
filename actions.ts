"use server"; 

import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// 1. Set up the specific SQLite adapter
const adapter = new PrismaBetterSqlite3({ 
  url: process.env.DATABASE_URL ?? "file:./dev.db" 
});

// 2. Pass the adapter into the Prisma Client
const prisma = new PrismaClient({ adapter });

export async function submitInquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const guestTotal = parseInt(formData.get("guestTotal") as string);
  
  const newInquiry = await prisma.inquiry.create({
    data: {
      name: name,
      email: email,
      guestTotal: guestTotal,
    },
  });
  
  console.log("✅ Successfully saved to Databae:", newInquiry);
}



export async function getInquiries() {
  // findMany() grabs all rows. 
  // orderBy puts the newest submissions at the very top of the list!
  const inquiries = await prisma.inquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  
  return inquiries;
}
"use server"; 

import { PrismaClient } from "@prisma/client";

// The App gets the high-speed pooled Postgres connection!
// No more SQLite adapter needed.
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.POSTGRES_PRISMA_URL
    }
  }
});

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
  
  console.log("✅ Successfully saved to Database:", newInquiry);
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
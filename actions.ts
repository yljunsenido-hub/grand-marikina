"use server"

import { prisma } from "../lib/prisma"

export async function submitInquiry(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const guestTotal = Number(formData.get("guestTotal"))

  await prisma.inquiry.create({
    data: {
      name,
      email,
      guestTotal,
    },
  })
}

export async function getInquiries() {
  return await prisma.inquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
}
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const storeFeedback = async (data: any) => {
  return prisma.outreachFeedback.create({ data });
};

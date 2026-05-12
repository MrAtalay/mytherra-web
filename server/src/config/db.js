import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeonHttp } from "@prisma/adapter-neon";

const adapter = new PrismaNeonHttp(process.env.DATABASE_URL);
export const prisma = new PrismaClient({ adapter });

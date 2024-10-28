import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient({
    log: ["query"] // will print query in console
});

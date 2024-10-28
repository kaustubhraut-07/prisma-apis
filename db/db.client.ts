import { PrismaClient } from "@prisma/client";

const prism =  new PrismaClient({
    log: ["query"] // will print query in console
});
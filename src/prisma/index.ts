import { PrismaClient } from '@prisma/client';

//para acessar os models e criar usuario no bd
const prismaClient = new PrismaClient();

export default prismaClient;
// import  { prisma } from "@/lib/client";
import { PrismaClient } from "@prisma/client";


export default async function handler(req, res) {
    try{
        const prisma = new PrismaClient();
        const data = await prisma.User.findMany();
        return  res.status(200).json(data);

    }catch(e) {
        return  res.status(500).json(e);
    }
  }
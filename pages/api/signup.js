// import { prisma } from "@/lib/client";

import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
    try{
        const prisma = new PrismaClient();
        
        if(req.method === 'GET'){
            const data = await prisma.User.findMany();
            await prisma.$disconnect();
            return  res.status(200).json(data);
    
        }
        
        if(req.method === 'POST') {
            
            if(!req.body){
                await prisma.$disconnect();
                return res.status(404).json({error: "Don't have form data!"});
            }

            const { username, password } = req.body;
            
           
            const checkUsers = await prisma.User.findMany({
                where: {
                    name:username,
                }
            });

            if(checkUsers.length > 0){
                await prisma.$disconnect();
                return res.status(422).json({message: "User already exists!"});
            }

            try{
                await prisma.User.create({
                    data: {
                        name: username,
                        password: await hash(password, 12),
                      },
                });
                await prisma.$disconnect();
                res.status(200).json({message:"register success!"});
            } catch(e) {
                await prisma.$disconnect();
                return res.status(500).json(e);
            }
        }

    }catch(e) {
        await prisma.$disconnect();
        res.status(500).json(e);
    }
  }

 
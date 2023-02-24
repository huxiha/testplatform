// import { prisma } from "@/lib/client";

import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    try{
        const prisma = new PrismaClient();
        if(req.method === 'GET'){
            const data = await prisma.User.findMany();
            return  res.status(200).json(data);
    
        }
        
        if(req.method === 'POST') {
            console.log('here');
            if(!req.body){
                return res.status(404).json({error: "Don't have form data!"});
            }

            const { username, password } = req.body;
            console.log(username);
            console.log(password);
           
            const checkUsers = await prisma.User.findMany({
                where: {
                    name:username,
                }
            });
            console.log(checkUsers);

            if(checkUsers.length > 0){
                return res.status(422).json({message: "User already exists!"});
            }

            try{
                console.log(username)
                await prisma.User.create({
                    data: {
                        name: username,
                        password: password,
                      },
                });
                res.status(200).json({message:"register success!"});
            } catch(e) {
                res.status(500).json(e);
            }
        }

    }catch(e) {
        return  res.status(500).json(e);
    }
  }

  handler()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
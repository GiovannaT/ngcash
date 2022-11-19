import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse){
    const prisma = new PrismaClient({log: ["query"]});

    try {
        
    } catch (error) {
        
    } finally {
        
    }
}
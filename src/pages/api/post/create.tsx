//where we are going to receive the data

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const { username, email, password } = req.body;

    const user = await prisma.users.create({
      data: {
        username,
        email,
        password,
        account:{
            create:{
                balance: 100
            }
        }
    }
    });
    res.status(200);
    res.json({ user });
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ error: "Sorry! Unable to save to the database." });
  }
  // finally {
  //     await prisma.$disconnect()
  // }
  /*
    PrismaClient automatically connects when you run your first query, creates a connection pool, and disconnects when the Node.js process ends.
    */
}

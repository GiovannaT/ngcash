import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

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
        account: {
          create: {
            balance: 100,
          },
        },
      },
    });
    res.status(200);
    res.json({ user });

  } catch (error) {
    res.status(500);
    console.log(error);
    res.json({ error: "Sorry! Unable to save to the database." });
  }
}

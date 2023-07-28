import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/libs/prismadb';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getSession } from 'next-auth/react';

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error('Usted no está registrado');
  } 

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    }
  });

  if (!currentUser) {
    throw new Error('Usted no está registrado');
  }

  return { currentUser };
};

export default serverAuth;

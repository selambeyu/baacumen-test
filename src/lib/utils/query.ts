import prisma from "../db";

// export const getUsers = async () => {
//   const users = await prisma.user.findMany();
//   console.log("users from prisma", users);
//   return users;
// };

export const getUsers = async (search: string, page: number, limit: number) => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ],
    },
    skip: (page - 1) * limit,
    take: limit,
  });
  const totalUsers = await prisma.user.count({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ],
    },
  });
  return { users, totalUsers };
};

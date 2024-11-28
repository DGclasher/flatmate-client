import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsersById(ids) {
  try {
    users = await prisma.userProfile.findMany({
      where: {
        googleId: {
          in: ids,
        },
      },
    });
    return users;
  } catch (error) {
    throw new Error(error);
  }
}

export async function completeUserProfile(id, data) {
  try {
    const user = await prisma.userProfile.update({
      where: {
        googleId: id,
      },
      data: {
        ...data,
        isCompleted: true,
      },
    });
    return user;
  } catch (error) {
    throw new Error(`Failed to complete user profile: ${error.message}`);
  }
}

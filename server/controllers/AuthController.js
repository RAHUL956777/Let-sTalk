import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ msg: "Email is required.", status: false });
    }
    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.json({ msg: "User Not found", status: false });
    } else {
      return res.json({ msg: "User Found", status: true, data: user });
    }
  } catch (error) {
    next(error);
  }
};

export const onBoardUser = async (req, res, next) => {
  try {
    const { email, name, about, image: profilePicture } = req.body;
    if (!email || !about || !profilePicture) {
      return res.send("Email, Name and Image are required.");
    }
    const prisma = getPrismaInstance();
    await prisma.user.create({
      data: {
        email,
        name,
        about,
        profilePicture,
      },
    });
    return res.json({ msg: "Success", status: true, user });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const prisma = getPrismaInstance();
    const users = await prisma.user.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        email: true,
        name: true,
        profilePicture: true,
        about: true,
      },
    });
    const userGroupByInitialLetter = {};

    users.forEach((user) => {
      const initialLetter = user.name.charAt(0).toUpperCase();

      if (!userGroupByInitialLetter[initialLetter]) {
        userGroupByInitialLetter[initialLetter] = [];
      }
      userGroupByInitialLetter[initialLetter].push(user);
    });

    return res.status(200).send({ users: userGroupByInitialLetter });
  } catch (error) {
    next(error);
  }
};

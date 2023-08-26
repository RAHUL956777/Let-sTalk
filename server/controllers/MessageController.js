import getPrismaInstance from "../utils/PrismaClient.js";

export const addMessage = async (req, res, next) => {
  try {
    const prisma = getPrismaInstance();
    const { message, from, to } = req.body;

    if (message && from && to) {
      const getUser = onlineUsers.get(to);

      const newMessage = await prisma.messages.create({
        data: {
          message,
          sender: { connect: { id: parseInt(from) } },
          receiver: { connect: { id: parseInt(to) } },
          messageStatus: getUser ? "delivered" : "sent",
        },
        include: { sender: true, receiver: true },
      });

      return res.status(201).send({ message: newMessage });
    }

    return res
      .status(400)
      .json({ error: "From, to, and message are required." });
  } catch (error) {
    next( error);
  }
};

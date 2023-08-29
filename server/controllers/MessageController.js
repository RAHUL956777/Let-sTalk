import getPrismaInstance from "../utils/PrismaClient.js";

export const addMessage = async (req, res, next) => {
  try {
    const prisma = getPrismaInstance();
    const { message, from, to } = req.body;

    const getUser = onlineUsers.get(to);
    if (message && from && to) {
      const newMessage = await prisma.message.create({
        data: {
          message,
          sender: { connect: { id: parseInt(from) } },
          receiver: { connect: { id: parseInt(to) } },
          messageStatus: getUser ? "delivered" : "sent",
        },
        include: { sender: true, receiver: true }, // Corrected typo here
      });

      return res.status(201).json({ message: newMessage }); // Send newMessage as JSON
    }

    return res
      .status(400)
      .json({ error: "From, to, and message are required." });
  } catch (error) {
    next(error);
  }
};



// export const addMessage = async (req, res, next) => {
//   try {
//     const prisma = getPrismaInstance();
//     const { message, from, to } = req.body;

//     const getUser = onlineUsers.get(to);
//     if (message && from && to) {
//       const newMessage = await prisma.messages.create({
//         data: {
//           message,
//           sender: { connect: { id: parseInt(from) } },
//           receiver: { connect: { id: parseInt(to) } },
//           messageStatus: getUser ? "delivered" : "sent",
//         },
//         include: { sender: true, reciever: true },
//       });

//       return res.status(201).send({ message: newMessage });
//     }

//     return res
//       .status(400)
//       .json({ error: "From, to, and message are required." });
//   } catch (error) {
//     next(error);
//   }
// };

// export const getMessages = async (req, res, next) => {
//   try {
//     const prisma = getPrismaInstance();
//     const { from, to } = req.params;

//     const messages = await prisma.message.findMany({
//       where: {
//         OR: [
//           {
//             senderId: parseInt(from),
//             receiverId: parseInt(to),
//           },
//           {
//             senderId: parseInt(to),
//             receiverId: parseInt(from),
//           },
//         ],
//       },
//       orderBy: {
//         id: 'asc',
//       },
//     });

//     const unReadMessages = [];
//     messages.forEach((message, index) => {
//       if (
//         message.messageStatus !== "read" &&
//         message.senderId === parseInt(to)
//       ) {
//         messages[index].messageStatus = "read";
//         unReadMessages.push(message.id);
//       }
//     });

//     await prisma.message.updateMany({
//       where: {
//         id: { in: unReadMessages },
//       },
//       data: { messageStatus: "read" },
//     });
//     res.status(200).json({ messages });
//   } catch (error) {
//     next(error);
//   }
// };

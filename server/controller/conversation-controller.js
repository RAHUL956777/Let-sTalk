import Conversation from "../models/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const reciverId = req.body.reciverId;
    const exist = await conversation.findOne({
      members: { $all: [reciverId, senderId] },
    });
    if (exist) {
      return res.status(200).json("Conversation already exists");
    }
    const newConversation = new Conversation({
      members: [senderId, reciverId],
    });
    await newConversation.save();
    return res.status(200).json("Conversation saved successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

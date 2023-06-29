import Message from "../models/message.js";
import Conversation from "../models/Conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);

    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      Message: req.body.text,
    });

    return res.status(200).json("Message has been send sucessfully");
  } catch (error) {
    return res.status(500).json("Error while sending message", error.Message);
  }
};

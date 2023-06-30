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

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    return responce.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error.Message);
  }
};

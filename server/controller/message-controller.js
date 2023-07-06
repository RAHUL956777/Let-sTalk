import Message from "../models/message.js";
import Conversation from "../models/Conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);

    await newMessage.save();

    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      $push: { messages: req.body.text },
    });

    return res.status(200).json("Message has been sent successfully");
  } catch (error) {
    return res.status(500).json("Error while sending message", error.Message);
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error while getting getMessage api", error.message);
    res.status(500).json(error.message);
  }
};

const { getWhatsappClient } = require('../client/WhatsappClient')
const { formatDate, formatPhoneNumber } = require("../utils/formatter");

const handleSendMessage = (req, res) => {
  const { number, date, time } = req.body;

  if (!number || !date || !time) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const formattedNumber = formatPhoneNumber(number) + '@c.us';
    const formattedDate = formatDate(date);

    const client = getWhatsappClient();
    client.sendPersonalMessage(formattedNumber, formattedDate, time);

    res.json({
      success: true,
      message: "Send message to personal number success",
      recipient: formattedNumber,
    });
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const handleSendGroup = (req, res) => {
  const { number, date, time } = req.body;

  if (!number || !date || !time) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    let formattedNumberGroup = formatPhoneNumber(number) + "@g.us";
    const formattedDate = formatDate(date);

    const client = getWhatsappClient();
    client.sendPersonalMessage(formattedNumberGroup, formattedDate, time);

    res.json({
      success: true,
      message: "Send message to group success",
      recipient: formattedNumberGroup,
    });
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { handleSendMessage, handleSendGroup };

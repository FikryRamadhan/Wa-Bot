const express = require('express');
const { handleSendMessage, handleSendGroup } = require('../controllers/WhatsappController');

const messageRoutes = () => {
  const router = express.Router();
  
  router.post('/send-message', handleSendMessage);

  router.post('/send-group', handleSendGroup);
  
  return router;
};

module.exports = messageRoutes;
import express from 'express';
import bodyParser from 'body-parser';
import next from 'next';
import mongoose from 'mongoose';
import Message from './app/pages/models/Message.js';
import dotenv from 'dotenv';
dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.use(bodyParser.json());

// إعداد الاتصال بـ MongoDB
mongoose.connect('mongodb://localhost:27017/message', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// معالج للرسائل
server.post('/api/contact', async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    // حفظ البيانات في قاعدة البيانات
    const newMessage = new Message({ email, subject, message });
    await newMessage.save();

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'An error occurred while saving the message.' });
  }
});

// مسار لالتقاط جميع المسارات غير المحددة
server.all('*', (req, res) => {
  return handle(req, res);
});

app.prepare().then(() => {
  server.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});

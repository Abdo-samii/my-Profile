import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Message from '../models/Message';

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGO_URI as string, {
    dbName: 'message',
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await connectMongo();
      const { email, subject, message } = req.body;

      // التحقق من الحقول
      if (!email || !subject || !message) {
        return res.status(400).json({ message: 'جميع الحقول مطلوبة.' });
      }

      // حفظ الرسالة في قاعدة البيانات
      const newMessage = new Message({ email, subject, message });
      await newMessage.save();

      res.status(200).json({ message: 'تم إرسال الرسالة بنجاح!' });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      res.status(500).json({ message: 'فشل الاتصال بقاعدة البيانات.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`طريقة ${req.method} غير مسموح بها`);
  }
}

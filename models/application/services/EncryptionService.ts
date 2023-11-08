import crypto from 'node:crypto';

import { captureException } from '@sentry/nextjs';

export function encrypt(text: string): any {
  try {
    const iv = crypto.randomBytes(16);
    const key = crypto.createHash('sha256').update(process.env.ENCRYPTION_KEY).digest('base64').substring(0, 32);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
  } catch (error) {
    captureException(error);
  }
}

export function decrypt(encryptedText: string): any {
  try {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');

    const encryptedData = Buffer.from(textParts.join(':'), 'hex');
    const key = crypto.createHash('sha256').update(process.env.ENCRYPTION_KEY).digest('base64').substring(0, 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    const decrypted = decipher.update(encryptedData);
    const decryptedText = Buffer.concat([decrypted, decipher.final()]);
    return decryptedText.toString();
  } catch (error) {
    captureException(error);
  }
}

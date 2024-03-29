/* eslint-disable no-unused-vars */

import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Name, Email, Message } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, 'an'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',

      ],
    });

    const sheets = google.sheets({
      version: 'v4',
      auth,
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:C1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[Name, Email, Message]],
      },
    });

    res.status(201).json({ message: 'Data entered successfully' });
  } else {
    res.status(200).json({ message: 'Done!' });
  }
}


/* eslint-disable no-unused-vars */

import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Name, Email, Message } = req.body;
    console.log(Name, Email, Message);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',

      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:C1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[Name, Email, Message]],
      },
    });

    res.status(201).json({ message: 'Date entered successfully' });
  }

  res.status(200).json({ message: 'Done!' });
}

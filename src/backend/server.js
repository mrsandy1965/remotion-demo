const express = require('express');
const multer = require('multer');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());

// Upload MP4 endpoint
app.post('/upload', upload.single('video'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded');
  res.json({ filename: req.file.filename, originalname: req.file.originalname });
});

// Speech-to-text endpoint (Whisper)
app.post('/caption', async (req, res) => {
  const { filename } = req.body;
  if (!filename) return res.status(400).send('No filename provided');
  const filePath = path.join('uploads', filename);
  // Whisper command (assumes whisper is installed)
  exec(`whisper ${filePath} --model small --output_format txt`, (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
    const txtFile = filePath.replace(/\.mp4$/, '.txt');
    fs.readFile(txtFile, 'utf8', (err, data) => {
      if (err) return res.status(500).send('Caption file not found');
      res.json({ captions: data });
    });
  });
});

app.listen(3001, () => {
  console.log('Backend server running on http://localhost:3001');
});

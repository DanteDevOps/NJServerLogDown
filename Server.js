const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(cors());

app.get('/download-log', (req, res) => {
    const programDataPath = process.env.PROGRAMDATA || 'C:\\ProgramData';
    const logFilePath = path.join(programDataPath, 'WebIQ', 'connect.log');

    if (fs.existsSync(logFilePath)) {
        res.download(logFilePath, 'connect.log', (err) => {
            if (err) {
                console.error('Error downloading the file:', err);
                res.status(500).send('Error downloading the file');
            }
        });
    } else {
        res.status(404).send('Log file not found');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

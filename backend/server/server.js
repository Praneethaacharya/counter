
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin:'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

let count = 0;

app.get('/api/count', (req, res) => {
    res.json({ count });
});

app.post('/api/increment', (req, res) => {
    count++;
    res.json({ message: 'Count incremented successfully', count });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

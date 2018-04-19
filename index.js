const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('coverflow/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'coverflow', 'build', 'index.html'));
    });
}

app.listen(PORT);
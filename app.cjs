const express = require('express');
const app = express();

app.use((req, res, next) => {
    const allowedDNS = '192.168.1.1'; //  allowed domain
    const host = req.get('host');
    
    if (host.includes(allowedDNS)) {
        next(); 
    } else {
        res.status(403).send('Forbidden: Invalid DNS'); // Deny access
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the website!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
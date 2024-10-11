const express = require('express');
const app = express();
const PORT = 3000;
const FrontEnd = require('./src/api/frontEnd')

app.use((req, res, next) => {
    const allowedDNS = 'localhost' || 'in-sekuritas.com'; // Set Rules for Access
    const host = req.get('host');
    
    if (host.includes(allowedDNS)) {
        next(); 
    } else {
        res.status(403).send('Forbidden Access: unknown user, only author can access this website!'); // Deny access
    }
});

// app.use(cors({ origin: 'http://http://localhost:5173' }));


// Run and render UI to /
app.get('/', (req, res) => {
    res.send('Granted Access to the website!');
    
});

app.use('/', FrontEnd)

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
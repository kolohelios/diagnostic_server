const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3333;

app.use(cookieParser());

const logger = (req, res) => {
    console.log('Method: ', req.method);
    console.log('\nURL: ', req.url);
    console.log('\nParams:\n', req.params);
    console.log('\nBody:\n', req.body);
    console.log('\nQueries:\n', req.query);
    console.log('\nHeaders:\n', req.headers);
    console.log('\nCookies:\n', req.cookies);
    console.log('\nSigned cookies:\n', req.signedCookies);
    res.send('OK');
}

app.head('*', logger);
app.post('*', logger);
app.get('*', logger);
app.put('*', logger);
app.delete('*', logger);
app.patch('*', logger);

app.listen(port, () => console.log(`Diagnostic logger listening on port ${port}!`));

'use strict';

const express = require('express');
const app = express();

let errorHandler = (error, req, res, next) => {
    res.status(500).send({
        error: 500,
        route: req.path,
        message: `Something went bad - ${error}`
    });
}

let notFoundHnalder= (req, res) => {
    res.status(404).send({
        error: 404,
        route: req.path,
        message: 'Not found :('
    });
}



app.get('/', (req, res) => {
    res.status(200).send("Welcome To Alaa's Server");
});


app.get('/gettingAutherData', (req, res) => {
    let objData = {
        name: "Ala'a  Smadi",
        phone: "0787189817",
        email: "alaasmadi1010@gmail.com",
        address: "Amman / Jordan"
    }
    res.status(200).json(objData);
});

app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

app.use('*', notFoundHnalder);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}

module.exports = {
    start,
    app
}
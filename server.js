// =======================
// get the packages we need
// =======================
var express = require('express');
var app = express();
var morgan = require('morgan');
var Tesseract = require('tesseract.js');
var multer = require('multer');
var upload = multer({ dest: 'images/' })
const fs = require('fs');

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens

// use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes
// =======================

// get an instance of the router for api routes
var apiRoutes = express.Router();

// turn image into text
apiRoutes.post('/tesseract', upload.single('img'), function(req, res) {
    // get the temporary location of the file
    // return res.send(req.file);
    if (!req.file) {
        return res.status(403).send({
            status: false,
            message: "Image is required. More info: https://github.com/asepmaulanaismail/image-to-text-nodejs-microservice"
        })
    }
    var tmp_path = req.file.path;

    // do tesseract
    Tesseract.recognize(tmp_path)
        .then(function(result) {
            fs.unlink(tmp_path, function() {
                return res.status(200).send({
                    status: true,
                    text: result.text,
                    confidence: result.confidence
                });
            })
        });
});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);


// =======================
// start the server 
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
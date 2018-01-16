# Image-to-Text API Microservice with NodeJS
Convert uploaded image and convert it into text using [Tesseract.js](https://github.com/naptha/tesseract.js).

# How to Use

### Running with Node & Nodemon

```
git clone https://github.com/asepmaulanaismail/image-to-text-nodejs-microservice
cd image-to-text-nodejs-microservice/
node server.js
```

or

```
git clone https://github.com/asepmaulanaismail/image-to-text-nodejs-microservice
cd image-to-text-nodejs-microservice/
nodemon server.js
```

### Running with Docker

See [how to install docker](https://github.com/asepmaulanaismail/install-docker-ubuntu-shell-script).

```
git clone https://github.com/asepmaulanaismail/image-to-text-nodejs-microservice
cd image-to-text-nodejs-microservice/
sudo docker build -t jwt-auth-nodejs:latest .
sudo docker run -d -p 8080:8080 jwt-auth-nodejs
```

# API:

## Tesseract

Route to show a random message

POST: `localhost:8080/`

Params (Multipart/form-data):

```
    + name: "img", type: "File", required: "true" 
```

Response:

```Javascript
{
    "status": true,
    "text": "It was the best of\ntimes, it was the worst\nof times, it was the age\nofwisdom, it was the\nage of foolishness“.\n\n",
    "confidence": 89
}
```
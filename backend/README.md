# ecommerce-gaming-shop REST API

Backend part of the "ecommerce-gaming-shop" project.

## Technological Stack

The code is based on Node.js, Express and MongoDB. In terms of testing there is also Mocha framework inital configuration added.

### Libraries

- bcrypt
- chai
- dotenv
- express
- jsonwebtoken
- mocha
- mongo-sanitize
- mongoose
- supertest

## Installation

1. After cloning the repository install dependencies with the command `npm install` / `yarn install`
2. Create `.env` file in the main directory
3. Create MongoDB cluster and database.
4. Add your database address to the .env file as `MONGO_URI=<yourDBaddress>`
5. Add test database address to the .env file as `MONGO_URI_TEST=<yourDBaddress>`
6. Add SendInBlue API key to the .env file as `SI_APIKEY=<yourSendInBlueAPIaddress>`
7. Add SendInBlue email address to the .env file as `SI_EMAIL=<yourSendInBlueEmailAddress>`
8. Add SendInBlue SMTP Endpoint, port, and sender addresses as

```
SMTP_ENDPOINT=<smtpEndpoint>
SMTP_PORT=<smtpPort>
SENDER_EMAIL=<email>
```

9. Add JWT secret key (it's up to your personal choice) to the .env file as `JWT_SECRET=<yourJWTsecretKey>`
10. Type in `npm start` to run the server

## API Routes

TBA

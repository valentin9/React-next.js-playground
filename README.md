# Valentin - 12.07.2020

## Installation

Requires Node.js 14

run npm install from "./" folder
run npm install from "./server" folder

run frontend with "npm run dev"
run api server from "./server" with "npm start"

open in browser on localhost:3000

## Security

// List security concerns:

-   files are checked for size in frontend
-   files are not checked for size in backend
-   files are checked for duplicate entries on backend
-   size of file name and real format is not checked
-   file uploaded is not actually saved, just metadata. To secure file upload it should try to convert file, if OK upload to different server/S3
-   express debug middleware should be disabled on prod
-   no DOS proterction implemented, no rate limiting

## Improvements

-   more error handling should be implemented
-   real file upload, with secure file checking by trying to convert to image
-   more unit test (Upload component, FileRepository)
-   API root page could list available endpoints

## Libraries

dependencies frontend:

axios: ajax requests with good browser support ( >= IE11)
styled-components: one of the most flexible and widely adopted styling library for react
next: react SSR and easy routing

dependencies server:
cors: CORS middleware for express.js for setting CORS and handling violations
debug: debug middleware for express.js
express-fileupload: handling file upload

## API

// The fake upload API built with express.js

### GET /resources

GET '/': welcome message
GET '/files': array of all files
GET '/files/:fileName': single file
GET '/files/:fileName': single file

### POST /resources

POST '/files': upload new file (multipart data with 'imagefile' field as file)

### DELETE /resources

## DELETE '/files/:fileName': delete file with :fileName

## Other notes

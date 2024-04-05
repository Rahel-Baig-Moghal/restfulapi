# Node.js REST APIs Project

This project demonstrates the use of Node.js and Express.js to create a simple RESTful API server. It includes routes for handling CRUD (Create, Read, Update, Delete) operations on a hypothetical "secrets" resource.

## Project Structure

- `index.js`: Main application file where Express app is configured and routes are defined.
- `package.json`: Contains project metadata and dependencies.
- `views/index.ejs`: EJS template for the frontend form and response area.

## Technologies Used

- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- Axios: Promise-based HTTP client for making requests to an external API.
- Body Parser: Middleware for parsing request bodies.
- EJS: Templating engine for rendering HTML templates.
- Nodemon: Development tool for automatically restarting the server when files change.

## How to Run

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.
4. Access the application at `http://localhost:3000`.

## Endpoints

- `GET /`: Renders the index.ejs view with an initial message.
- `POST /get-secret`: Retrieves a secret based on the provided ID.
- `POST /post-secret`: Posts a new secret to the API.
- `POST /put-secret`: Updates an existing secret in the API.
- `POST /patch-secret`: Partially updates an existing secret in the API.
- `POST /delete-secret`: Deletes a secret from the API.

## Learning Journey

This project has been a great learning experience for me. I have gained a better understanding of how to create a RESTful API using Node.js and Express.js. I have also learned how to use Axios for making HTTP requests and Body Parser for parsing request bodies. Additionally, I have improved my skills in frontend development by using EJS for rendering dynamic content.

## Author

Rahel Baig Moghal

import express from "express";  // Importing the Express framework
import axios from "axios";      // Importing Axios for making HTTP requests
import bodyParser from "body-parser";  // Importing Body Parser middleware for parsing request bodies

const app = express();  // Creating an instance of Express
const port = 3000;      // Setting the port number for the server
const API_URL = "https://secrets-api.appbrewery.com";  // Setting the API URL

const yourBearerToken = "****************************";  // Setting the bearer token for authentication
const config = {  // Setting configuration for Axios requests
  headers: {
    Authorization: `Bearer ${yourBearerToken}`,  // Including the bearer token in the headers
    "Content-Type": "application/json",           // Setting the content type for the request
  },
};

app.use(bodyParser.urlencoded({ extended: true }));  // Using Body Parser middleware to parse URL-encoded bodies

// Setting up a route for the home page
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });  // Rendering the index.ejs view with initial content
});

// Setting up a route for getting a secret
app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;  // Extracting the search ID from the request body
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);  // Making a GET request to the API with the search ID
    res.render("index.ejs", { content: JSON.stringify(result.data) });  // Rendering the index.ejs view with the result data
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });  // Rendering the index.ejs view with the error response data
  }
});

// Setting up a route for posting a secret
app.post("/post-secret", async (req, res) => {
  try {
    const response = await axios.post(API_URL + "/secrets", req.body, config);  // Making a POST request to the API with the request body
    res.render("index.ejs", { content: JSON.stringify(response.data) });  // Rendering the index.ejs view with the response data
  } catch (error) {
    res.status(404).send(error.message);  // Sending a 404 status and the error message
  }
});

// Setting up a route for updating a secret
app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;  // Extracting the search ID from the request body
  try {
    const response = await axios.put(API_URL + `/secrets/${searchId}`, req.body, config);  // Making a PUT request to the API with the request body
    res.render("index.ejs", { content: JSON.stringify(response.data) });  // Rendering the index.ejs view with the response data
  } catch (error) {
    res.status(404).send(error.message);  // Sending a 404 status and the error message
  }
});

// Setting up a route for partially updating a secret
app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;  // Extracting the search ID from the request body
  try {
    const response = await axios.patch(API_URL + `/secrets/${searchId}`, req.body, config);  // Making a PATCH request to the API with the request body
    res.render("index.ejs", { content: JSON.stringify(response.data) });  // Rendering the index.ejs view with the response data
  } catch (error) {
    res.status(404).send(error.message);  // Sending a 404 status and the error message
  }
});

// Setting up a route for deleting a secret
app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;  // Extracting the search ID from the request body
  try {
    const response = await axios.delete(API_URL + `/secrets/${searchId}`, config);  // Making a DELETE request to the API with the search ID
    res.render("index.ejs", { content: JSON.stringify(response.data) });  // Rendering the index.ejs view with the response data
  } catch (error) {
    res.status(404).send(error.message);  // Sending a 404 status and the error message
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);  // Logging a message to indicate that the server is running
});

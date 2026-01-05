---
description: Flask-based URL shortener with RESTful API
details: >
  Shortens long URLs and retrieves original URLs using a short key.
  Frontend is optional; API endpoints handle shortening and redirection.
technologies:
  - flask
  - python
  - sqlite
  - rest
hostedUrl: 
---


# URL Shortener API

This is a simple URL shortener application built with Flask and a front-end HTML/CSS/JavaScript. The back-end exposes a RESTful API that allows users to shorten URLs and retrieve the original URLs using the shortened version.

## Table of Contents

1. [Overview](#overview)
2. [API Endpoints](#api-endpoints)
   - [POST /shorten](#post-shorten)
   - [GET /:short_key](#get-short_key)
3. [Setting Up the Project](#setting-up-the-project)
   - [Back-End (Flask)](#back-end-flask)
   - [Front-End (HTML/CSS/JS)](#front-end-html-cssjs)
4. [Running the Application](#running-the-application)

## Overview

This URL shortener service allows users to:
- Shorten long URLs.
- Retrieve the original URL using a short key.

The back-end API is built with **Flask** and exposes two primary endpoints:
1. A `POST /shorten` endpoint to shorten URLs.
2. A `GET /<short_key>` endpoint to retrieve the original URL.

The front-end consists of a basic HTML form where users can input URLs to shorten. The front-end communicates with the Flask API to perform URL shortening.

## API Endpoints

### POST /shorten

**Description**: This endpoint takes a URL from the client, generates a short key, and returns the shortened URL.

**Request**:
- **Method**: `POST`
- **URL**: `http://localhost:5000/shorten`
- **Body**: JSON containing the URL to shorten:
    ```json
    {
        "url": "https://www.example.com"
    }

**Response**:

- **Status**: `201 Created`
- **Body**: JSON containing the shortened URL:
    ```json
    {
        "shortened_url": "http://localhost:5000/abc123"
    }

### GET /:short_key
**Description**: This endpoint retrieves the original URL from the shortened URL using the short key.

**Request**:
- **Method**: `GET`
- **URL**: `http://localhost:5000/<short_key>`

**Response**:

- **Status**: `200 OK`
- **Body**: JSON containing the original URL:
    ```json
    {
        "original_url": "https://www.example.com"
    }

## Setting Up the Project
### Back-End (Flask)
1. Clone the Repository:
    
    Clone the repository to your local machine.
    ```bash
    git clone https://github.com/Micmada/url-shortener.git
    cd url-shortener
    ```
2. Set up a Virtual Environment(Optional):
    
    It's recommended to use a virtual environment to manage project dependencies.
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. Install Dependencies: 
    
    Install the required Python libraries:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask Server:
    Start the Flask server by running:
    ```bash
    python app.py
    ```
    The Flask server should now be running on http://localhost:5000.

### Front-End (HTML/CSS/JS)
1. Create a frontend Folder:
    
    Inside the project directory, create a folder called frontend, and place your HTML, CSS, and JavaScript files inside.

2. Open the Front-End in a Browser:
    
    You can either open the index.html file directly in your browser or set up a local server to serve the front-end:
    ```bash
    python -m http.server 8000
    ```
    This will serve the front-end on http://localhost:8000.

## Running the Application
1. Back-End:
    - Ensure your Flask API is running on http://localhost:5000.
    - The back-end is responsible for handling requests to shorten URLs and redirect to the original URLs.

2. Front-End:
    - Open frontend/index.html in your browser.
    - You can input URLs to shorten and see the shortened URL displayed.

3. CORS:
    - Since the front-end is served on a different port (e.g., localhost:8000) than the back-end (localhost:5000), ensure that CORS is enabled in your Flask app to avoid cross-origin request issues.

This markdown file explains how the entire URL shortener app works, the API endpoints, how to set up the project, and how to run it locally. It includes detailed instructions for both the back-end (Flask) and front-end (HTML/CSS/JS).

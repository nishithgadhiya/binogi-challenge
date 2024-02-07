# Recipe Explorer

This is a web application for searching recipes using the [Edamam Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api).

## Deployed Link

The application is deployed in Vercel at [https://binogi-challenge.vercel.app/](https://binogi-challenge.vercel.app/).

## Overview

The Recipe Search App allows users to search for recipes based on keywords. It fetches recipe data from the Edamam Recipe Search API and displays the results to the user. Users can bookmark the recipes which will be stored in localstorage.

## Technologies Used

- React.js (TypeScript)
- Material-UI
- Axios
- React-Router v6

## Features

- Search for recipes by keyword
- View recipe details
- Bookmark recipes (in progress)

## How to Run Locally

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/nishithgadhiya/binogi-challenge.git
```

2. Move to the folder

```
cd binogi-challenge
```

3. Install dependencies

```
npm install
```

4. Add .env file whth your credentials

```
REACT_APP_API_ID=Your API Id
REACT_APP_API_KEY=Your API Key
```

5. Start your application

```
npm start
```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

Reach out to me if you have any questions. Feel free to explore the codebase and customize the application as needed!

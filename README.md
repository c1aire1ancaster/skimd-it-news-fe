# Skim'd It News Website

Skim'd It News Website was my solo frontend project for the [Northcoders'](https://northcoders.com/our-courses/coding-bootcamp) Software Engineering Bootcamp.

---
---

## 🔗 Links:

Link to hosted version of Skim'd It website: https://skimd-it.netlify.app/

Link to repository for backend project for Skim'd It: https://github.com/clairenlancaster/skimd-it-news-be

---
--- 
## 🏗️ Project Summary:

A news website that allows users to login with an account, sift through all articles or filter them down by topic. Articles can be sorted by date, comment count and vote count whilst also being rendered in ascending or descending order. As well as reading an article, users can up-vote or down-vote an article, read comments related to a specific article, up-vote and down-vote comments, post their own comments and delete any comments they have written.

---
---
## ⚙️ Version Requirements:

- Node.js: v19.2.0

---
---

## ✅ Instructions:

If you wish to clone this project and run it locally, follow the instructions below:

### 1. Clone Repository:
1. In this repository, use the <code><>Code</code> button to access and copy its url.
2. In your terminal, use <code>git clone</code> followed by the repository's url.
3. Open up the folder in you preferred IDE.

---
### 2. Install Dependencies:
- Run <code>npm install</code> to install all dependencies.
- See the package.json file for an overview of all dependencies used.
---
### 3. Setup Redirects:
Add a file, <code>_redirects</code> (no file extension) to your public directory. This file should contain the redirect rule: <code>/* /index.html 200</code>. 

This is telling Netlify "if a request comes in to any endpoint on our base url - serve our index.html page and give a 200 status". 

We put this in the public directory to ensure that Webpack includes this file in the production build of the app.

---

### 4. Deploying Website:
To host website, you could use [Netlify](https://www.netlify.com/). 

Full instructions are available in the <code>create-react-app</code> docs. 

Scroll down this [page](https://create-react-app.dev/docs/deployment/) to find the up-to-date instructions on how to deploy the website.





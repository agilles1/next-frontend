# Next (front end)

Next is an orchestra audition management web app designed by a former Assistant Personnel Manager of a major American orchestra. 

This application allows you to create auditions and manage the checking in of candidates and the tracking of their pressence throughout the audition process. 

Built with React/Redux

<h1 align="center">Next</h1>

<div align="center">
  Next is an orchestra audition management web app designed by a former Assistant Personnel Manager of a major American orchestra. 
</div>
<br/>
<p align="center">
  <iframe src="https://giphy.com/embed/oVmFXTDUy3a6tmoa5F" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/oVmFXTDUy3a6tmoa5F">via GIPHY</a></p>
</p>
<div align="center">
  <p>
  🧭Explore: 
  <a href="https://youtu.be/42EhuZF6h2I">Demo</a> || <a href="https://catthoughts.herokuapp.com/">Deployed App</a>
  </p>
</div>

## Features 
- Sign in/Sign up option with authenticated password
- View/Edit profile 
- Follow/Unfollow other users
- Full CRUD capabilities for post such as 
  - Create a post
  - View all posts written on this application
  - Edit/Delete only the posts written by the logged in user 
- Like/Unlike only the posts written by other users
- Add comments to any post
 
## Tech Stack
This web app makes use of the following:
- Ruby [2.6.1]
- Rails [~> 6.0.2] - MVC Web Framework
- SQLite3 [~> 1.4] - Database
- Bulma-Rails [~> 0.8.0] - Integrates Bulma with the rails asset pipeline, a modern CSS framework based on Flexbox.
- BCrypt [~> 3.1.7] - Gem for encryption

## Installing

- Clone this repo to your local machine `git clone <this-repo-url>`
- run `bundle install` to install required dependencies
- run `rails db:create` to create a database locally.
- run `rails db:migrate` to create tables into the database.
- run `rails db:seed` to create seed data.
- run `rails s` to run the server. 

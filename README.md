# Swell

[Swell](https://swell-.herokuapp.com/#/)


Swell is a Strave inspired map making, fitness tracking, one-stop shop app for athletes looking to track and complete their fitness gaols.  

## Production

Swell is a web app built designed and built over a 10 day period.  By leveraging the power of React/Redux framework, Swell was developed as a powerful scaleable design.  In addition, Swell's backed is built on the Ruby on Rails 5.0 platform and utilizes PostgreSQL for its database management.  jQuery Ajax requests communicate between the frontend and backend packaging the data as JSON responses for the frontend to render.


Here are a few of the current features:

1. Create Routes
* Users can create/delete routes by utilizing a customized Google Map api
2. Save Workout
* Users can save workouts associated with their routes
* Workout stat data is associated with workouts through their related routes
3. Track workouts via workout feed and stat widget
* Users can analyze their workout stats to track athletic progress



## Creating Routes

* Users can dynamically create Google mapped routes for their favorite trails, tracking distance, elevation, and estimated route duration.

![Draw a Route](https://media.giphy.com/media/NS4sqYm5cKxnrDW2F1/giphy.gif)

* Routes are saved to their accounts for future reference
* Routes can be added and deleted as needed

![Save Routes](https://i.imgur.com/Az19srv.png)

* User can save workouts and add them to their workout feed.  Displaying all relevant data/stats (ie: duration, elevation climbed, distance run.
* Workut stats are pulled directly from route information by using rails associations
* Even if users remove routes from their accounts, their associated stats remain for future workout total calculations

## Saving/Tracking Workouts
![Save a workout](https://media.giphy.com/media/1jWbAf6qIaF1TSiQby/giphy.gif)

* Users can track their historical stats in real time.  Distance and elevation for complete history is calculated on the fly as workouts are added/removed

![Save Stats](https://media.giphy.com/media/3Hz0BCHeNE5q3SiIQ7/giphy.gif)


## Future Plans

* More Dynamic Stat Tracking
  * Track workout data broken down by weekly monthly views
* Social Aspect
  * Track your friends workout progress, give them fitness challenges, track their goals
* Include a search component in the map creator

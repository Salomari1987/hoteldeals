## User stories:
* User opens applications and is presented with a search box and an alternative to view all deals (not done)
* User can view list of hotels (done)
* User can see deals in a list view and map view (not done)
* User can filter hotels by controls provided at left side of screen (done)
* User can reset view (not done)

## Development process:
* Define stories (above)
* Refine functionality neccessary on backend side to fetch the data needed for the story
* Write tests then write functions
* Make sure tests pass
* Repeat on frontend
* After story is complete, publish and set version number
* Deploy to heroku

## Features
* View Deals in an appealing manner
* Filter results according to star rating, destination, and maximum rate.
* Application consumes Expedia API with a call from server-side

## General Use
* Visit homepage
* You will routed to deals page
* Scroll down to see deals
* Fill in filter details in left and view filtered results

## Meet The Engineers
* Author: Salah Alomari

## Work done:
### Files:
* client: contains all the app js and html files
** app/services: backend services
** app/filterView: Filter container template and controller
** app/listView: Hotel Deals page template and controller
** app/app.js: main app file, contains routing, http interceptors, and where the main modules are loaded
** index.html: main page
** styles: contains styling files 
* server:
** specs: tests
** services: to handle REST http requests
** controllers: to handle client side requests and works as a hub between router and services
** config: middleware, router, helpers
** Gulpfile: builder
** Procfile: neccessary for heroku

### Design:
* The design was based on bootstrap, fontawesome, and bootswatch for themes
* I wanted to deliver a clean minimal design with a clean look and interactive options
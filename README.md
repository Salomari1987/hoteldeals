# Hotel Deals WebApp #

[Heroku Link](https://hotelsdeals.herokuapp.com) or https://hotelsdeals.herokuapp.com

## Hotel Deals Display and Filter Portal ##

## Start the app (Instructions)
After cloning (or Downloading) the project into your local do from the root repository
* ```sudo npm install -g bower```
* ```npm install```   - to install dependancies
* ```npm start```   	- to start the project and access the portal on localhost
* Access application on **localhost:8000**

## Linting
* Eslint used for linting based on hackreactor styling guide
To run the lint file do:
* npm run lint

## Testing
* Must have PhantomJS installed
* all tests are in specs folder
* full tests:    gulp tdd

## Dependancies
You can find server side dependancies in package.json and client side dependancies in bower.json

### Testing suits
#### Front End
* Karma
* Jasmine
* Istanbul
* PhantomJS

#### Back End
* Chai
* Mocha

## Assumptions:
* User will only access hotel deals
* No authentication is needed
* User does not need to save any information or pay for rooms
* Server side rendering is not intended
* The application is lightweight that is why there is no concating or uglifying
* Only English is required

## Known issues:
* User cannot reset to all view after filtering and must refresh browser (TODO)
* The processing is done inside the browser thread which will slow down the user experience, TODO: use an external worker with event listeners for when the processing is complete
* User requests are not checked for authorization which could impose security risks
* All results are rendered at once, which affects user experience, the solution is to use lazy loading
* The design is not properly optimized for mobile view
* The desciption is long and affects the size of the hotel description container, TODO: use text overflow with ellipses and **Read More** function
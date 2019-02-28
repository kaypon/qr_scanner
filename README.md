# Grommet QR READER

This is a sample application for an idea I had that utilizes QR codes.

The application contains a QR code with a structured json response. Install node modules with:

`npm i` 

and start the application with 

`npm start` 

The application will load on `localhost:3000` and request camera permissions.

Once running, run the ruby qr generator with the command:

`ruby qr_gen.rb`

Answer the questions prompted in terminal and a QR code should open (if you're using Mac, no clue if this works on windows). Save that image and display it to the QR scanner at `localhost:3000`

## USE CASE

The idea was basically to have a name tag at conferences that has a simple QR code on it. Attendees at the conference can then download this application in the future, and when meeting someone, they can scan their QR code and see their information.

Garage Server Program Testing Instructions

I.  Tools needed
    A.  Postman
    B.  Visual Studio Code or other code editor (preferably with terminal)


II. Garage Server Setup
    A.  Open VS Code and the ternminal
    B.  To start server:  
                npm run dev
    C.  When connected, server and MongoDB will console.log a message in the terminal.
    D.  If there is trouble, try:
                npm install
                npm run dev
    E.  Once server and database is connected, open Postman.


III. Postman Setup
    A.  Included with this zip file is a file called "Garage.Postman_collection.json".  Please import this collection into Postman for testing.
    B.  The name of the collection is "Garage", four folders ("Authentication", "Cars", "Trucks", and "Boats".) and has 19 requests.

IV. Logging into Garage with Postman
    A.  First, open the "Authentication" folder and click on the "Login User" post request.  I have saved the email and password in the body.  Here it is again:
        {
            "email": "john@gmail.com",
	        "password": "password"
        }
    B.  If either the value for email or password are incorrect, the program with respond with an object with 
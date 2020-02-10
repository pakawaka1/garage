Garage Server Program Testing Instructions

I. TOOLS NEEDED

    1.  Postman

    2.  Visual Studio Code or other code editor (preferably with terminal)

II. GARAGE SERVER SETUP

    1.  Open VS Code and the terminal.

    2.  To start server:
                npm run dev

    3.  When connected, server and MongoDB will console.log a message in the terminal.

    4.  If there is trouble, in the terminal try:
                npm install
                npm run dev

    5.  Once server and database is connected, open Postman.

III. POSTMAN SETUP

    1.  Included with this zip file is a file called "Garage.postman_collection.json".  Please import this collection into Postman for testing.

    2.  The name of the collection is "Garage", and includes four folders ("Authentication", "Cars", "Trucks", and "Boats") and 19 requests.

    3.  Each request already has a saved URL ()

IV. LOGIN TO GARAGE USING POSTMAN

    1.  Path:               Request Name (in Postman):
        /auth/login         Login User

    1.  First, open the "Authentication" folder and click on the "Login User" post request.  I have saved the email and password in Postman, but here it is:
        {
            "email": "john@gmail.com",
            "password": "password"
        }

    2.  If either the value for email or password are incorrect, the response will be:
        {
            "success": false,
            "error": "Invalid credentials.  Please check your inputs."
        }

    3.  When login is successful, the response will include a JSON Web Token (JWT) and will look like this example:
        {
            "success": true,
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlM2UxNjY3NThhMzYzYmVjZGNjZDY0OCIsImlhdCI6MTU4MTMxMTE1OSwiZXhwIjoxNTgyMTc1MTU5fQ.UP_vanngfvZfHKh5dReW8_Km1Dmrnjt5E7TFKOs2s90"
        }

    4.  A new JWT sent with every successful login.  When you successfully login, copy the valid JWT from the response object to your clipboard, as you will need to test all protected routes.

V. TESTING PROTECTED ROUTES

    1.  All Cars, Trucks and Boats routes, along with the route "http://localhost:5000/auth/user" (user profile) are protected and require the valid JWT you received upon login.

    2.  When making requests using protected routes, you will need to paste the valid JWT into the headers for each individual request for the value, preceded by the word "Bearer". The format will be similar to this example:
        Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlM2UxNjY3NThhMzYzYmVjZGNjZDY0OCIsImlhdCI6MTU4MTMxMTE1OSwiZXhwIjoxNTgyMTc1MTU5fQ.UP_vanngfvZfHKh5dReW8_Km1Dmrnjt5E7TFKOs2s90

        Also, include the key "Authorization" in the headers when making the request.

    3.  For testing, go ahead set the headers, as described above, into each of the requests before doing any testing.

    4.  Make sure to use the correct JWT and it is verified programmtically. If the JWT is not valid, the response will be:
        {
        "success": false,
        "error": "Not authorized to access this route."
        }
        If this happens, the JWT is no longer valid and you will need to obtain a new one.  Login again by clicking the "Login User" post request in the "Authentication" folder, send the request, and copy the JWT in the response.

VI. GET REQUESTS FOR LIST

    1.  Paths:             Request Name (in Postman):                   Operation:
        /cars              List All Cars (in "Cars" folder)             List
        /trucks            List All Trucks (in "Trucks" folder)         List
        /boats             List All Boats (in "Boats" folder)           List
        /auth/user         List User (in "Authentication" folder)       List

    2.  For each test, find the request name in Postman and click it to open.

    3.  Make sure you already set the valid JWT in the headers.  Then, click the "Send" button.

    4. Response will include all objects in each path.

VII. GET REQUESTS FOR READ

    1.  Paths:              Request Name (in Postman):                  Operation:
        /cars/:id           Read One Car (in "Cars" folder)             Read
        /truck/:id          Read One Truck (in "Trucks" folder)         Read
        /boats/:id          Read One Boat (in "Boats" folder)           Read

    2.  The ":id" in the path comes from the object's id:
        "data": [
            {
                "_id": "5e3ee7ab79f950d28f4f44cc",
                "make": "Chevrolet",
                "model": "Volt",
                "year": 2020,
                "seats": "two",
                "color": "blue",
                "VIN": "23D3S353S30302105",
                "currentMileage": 100,
                "serviceInterval": "every 7500 miles",
                "nextService": 8000,
                "__v": 0
            },
            {
                "_id": "5e3ee8e579f950d28f4f44ce",
                "make": "Tesla",
                "model": "Focus",
                "year": 2020,
                "seats": "four",
                "color": "blue",
                "VIN": "23D3S353S30302107",
                "currentMileage": 100,
                "serviceInterval": "every 7500 miles",
                "nextService": 8000,
                "__v": 0
            },

    3.  In the first object, the ":id" would be:
            "_id": "5e3ee7ab79f950d28f4f44cc".

    4.  Next, find the request name in Postman and click it to open.

    5.  Set the path using the ":id"
        /cars/5e3ee7ab79f950d28f4f44cc

        Later on, when making put and delete requests, you will need to include the ":id" in the url just as you did here.

    6.  Make sure you already set the valid JWT in the headers.  Then, click the "Send" button.

    7.  Your response will look like:
        {
            "success": true,
            "data": {
                "_id": "5e3ee7ab79f950d28f4f44cc",
                "make": "Chevrolet",
                "model": "Volt",
                "year": 2020,
                "seats": "two",
                "color": "blue",
                "VIN": "23D3S353S30302105",
                "currentMileage": 100,
                "serviceInterval": "every 7500 miles",
                "nextService": 8000,
                "__v": 0
            }
        }
    8.  If your id does not exist, or is incorrect, the response will be an error.

VIII. POST REQUESTS FOR CREATE

    1.  Paths:              Request Name (in Postman):                  Operation:
        /cars/              Create One Car (in "Cars" folder)           Create
        /truck/             Create One Truck (in "Trucks" folder)       Create
        /boats/             Create One Boat (in "Boats" folder)         Create

    2.  Find the request name in Postman and click it to open.

    3. Each request will require to have following fields completed for a successful request:

        Car:                        Truck:                          Boat:
        Make                        Make                            Make
        Model                       Model                           Model
        Year                        Year                            Year
        Seats                       Seats                           Length
        Color                       BedLength                       Width
        VIN                         Color                           HIN
        Current Mileage             VIN                             Current Hours
        Service Interval            Current Mileage                 Service Interval
        Next Service                Service Interval                Next Service
                                    Next Service

    4.  The above fields will look similar to these objects:
        Car:
        {
            "make": "Ford",
            "model": "Fusion",
            "year": 2020,
            "seats": "two",
            "color": "Blue",
            "VIN": "03D3S353S30302135",
            "currentMileage": 100,
            "serviceInterval": "every 7500 miles",
            "nextService": "7600"
        }
        Truck:
        {
            "make": "Tahoe",
            "model": "905",
            "year": 2019,
            "length": "24 feet LOA",
            "width": "12 feet",
            "HIN":"TAH23244512X3",
            "currentHours": 50,
            "serviceInterval": "every 50 hours",
            "nextService": 100
        }
        Boat:
        {
            "make": "Tahoe",
            "model": "905",
            "year": 2019,
            "length": "24 feet LOA",
            "width": "12 feet",
            "HIN":"TAH23244512X3",
            "currentHours": 50,
            "serviceInterval": "every 50 hours",
            "nextService": 100
        }
    5.  Next, find the request name in Postman and click it to open.

    6.  In the Body of the request, include the object, making sure to include all the fields listed above.

    7.  Make sure you already set the valid JWT in the headers.  Then, click the "Send" button.

    8.  A successful response object will include an id assigned to it by the database:
        {
            "success": true,
            "data": {
                "_id": "5e410ca9f2c36d525a870430",
                "make": "Dodge",
                "model": "Ram",
                "year": 2010,
                "seats": "one",
                "bedLength": "long",
                "color": "red",
                "VIN": "33334567890IUPEAN",
                "currentMileage": 100000,
                "serviceInterval": "every 7500 miles",
                "nextService": 107500,
                "__v": 0
            }
        }
    9.  If a field is missing, or there is some other error, your response will look something like this:
        {
            "success": false,
            "error": "Please enter a VIN nunber."
        }

IX. PUT REQUESTS FOR UPDATE

    1.  Paths:              Request Name (in Postman):                  Operation:
        /cars/:id           Update One Car (in "Cars" folder)           Update
        /truck/:id          Update One Truck (in "Trucks" folder)       Update
        /boats/:id          Update One Boat (in "Boats" folder)         Update

    2.  Find the request name in Postman and click it to open.

    3.  Set the path using the ":id" from the vehicle you want to update:
        /cars/5e3ee7ab79f950d28f4f44cc

    4.  In the Body of the request, include an object with the key value pair you want to update:
        {
            "nextService": 7500
        }

    5.  Make sure you already set the valid JWT in the headers.  Then, click the "Send" button.

    6.  A successful response object will look like this:
        {
            "success": true,
            "msg": "Updated car 5e3ee7ab79f950d28f4f44cc."
        }
    7.  An response error will appear otherwise:
        {
            "success": false,
            "error": "Not authorized to access this route."
        }

X. DELETE REQUESTS FOR DELETE

    1.  Paths:              Request Name (in Postman):                  Operation:
        /cars/:id           Delete One Car (in "Cars" folder)           Delete
        /truck/:id          Delete One Truck (in "Trucks" folder)       Delete
        /boats/:id          Delete One Boat (in "Boats" folder)         Delete

    2.  Find the request name in Postman and click it to open.

    3.  Set the path using the ":id" from the vehicle you want to update:
        /cars/5e3ee7ab79f950d28f4f44cc

    4.  Make sure you already set the valid JWT in the headers.  Then, click the "Send" button.

    5.  A successful response object will look like this:
        {
            "success": true,
            "msg": "Deleted car 5e3ee7ab79f950d28f4f44cc."
        }

    6.  An response error will appear otherwise:
        {
            "success": false,
            "error": "Car not found with id of 5e3ee7ab79f950d28f4f44cc."
        }

XI. LOGOUT

    1. Path:               Request Name (in Postman):
    /auth/logout           Logout User

    2.  Find the request name in the "Authentication" folder in Postman and click it to open.

    3.  Then, click the "Send" button.

    4. This will clear out the token from storage in cookies.

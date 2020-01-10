Traversy UDEMY project 2 (Full Stack) React+Node+Express+Mongo Atlas
Lesson 33
Lesson 34 - registering in Mongo Atlas

Profile:
  Login:  isporti@i.ua
  Pass:   test-project-udemy

User for cluster:
  Login:  Yurii
  Pass:   mongo12345

Adding Whitelist IP address:
Allow access from anywhere:
  0.0.0.0/0

Connecting to the database:
mongodb+srv://Yurii:mongo12345@cluster0-leohf.mongodb.net/test?retryWrites=true&w=majority

Lesson 35 - Creating an Express server:
Create folder "contact-keeper"
  npm init
  npm install --save express bcryptjs jsonwebtoken config express-validator mongoose
  npm install -D nodemon concurrently

Modifying package.json file, adding "start" and "server" scrypts.

Then, to run a server:
  npm run server

http://localhost:5000/
Use Postman and browser for requests.

Create a ".gitignore" file.
  git init
  git add .
  ...
...................................................................
Lesson 45: Setup Concurrently (to run both server and client)
First create React client:
  npx create-react-app client
Now in file "package.json" ON SERVER!!! add scripts:
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "clientinstall": "npm install --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
The most important - "dev" script (to run server and client at once!)

Now in "client" folder in file "package.json" add proxy:
  "proxy": "http://localhost:5000"

Now run:
  npm run dev

Lesson 46
Delete git repository (i didn't do whis):
  cd client
  rm -rf .git

----
Install dependencies for React client:
  cd client  
  npm i --save axios react-router-dom uuid react-transition-group 
  cd ..
  npm run dev

FONT AWESOME
  cd client
  npm install --save-dev @fortawesome/fontawesome-free
Now in file index.js add this line:
  import "@fortawesome/fontawesome-free/css/all.css";

Now create a Navbar component:
  racfe
Import prop types:
  impt
Prop types:
  ptar - for array,
  ptbr - for boolean,
  ptsr - for string,
  ptfr - for function,
  ptor - for Object
Also add default props!

in App.js add Fragment and Router.
Create Home and About components.

Adding Links into Navbar component (<ul>)

Lesson 47
Creating contact Context, Global State!

Lesson 48
Display hard coded Contact data

Lesson 49
Creating a Form

Lesson 50
Delete Contact form

Lesson 51
Edit functionality

Lesson 52
Edit Update Contact

Lesson 53
Filter

Lesson 54
Animation

Lesson 55
Start working with SERVER!

Lesson 56
Register Login Form

Lesson 57
Register Alerts

Lesson 58
User registration, saving token in localStorage

Lesson 59
Load User, Set Token


